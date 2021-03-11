import { Sequelize, QueryTypes } from 'sequelize';

import Pets from '../models/Pets';
import User from '../models/User';
import calculateDistance from '../../utils/calculateDistance';
import Notification from '../schemas/Notification';

import dbConfig from '../../config/database';

class PetsController {
  async create(request, response) {
    const petObj = request.body;

    const user = await User.findByPk(request.userId);

    if (!user) {
      return response.status(400).json({ error: 'User not find' });
    }
    let pet = [];

    if (!petObj.is_lost) {
      pet = await Pets.create({
        latitude: user.latitude,
        longitude: user.longitude,
        id_user: user.id,
        ...petObj,
      });

      // Pega as coordenadas do dono do pet
      let { latitude: lat1, longitude: long1 } = user;
      lat1 = Number(lat1);
      long1 = Number(long1);
      const centerCoordinates = { lat1, long1 };

      // Percorre um array de usuarios (exceto o dono) e calcula a distância de cada um com o dono
      const { ne } = Sequelize.Op;
      const listUsers = await User.findAll({
        where: {
          id: {
            [ne]: request.userId,
          },
        },
      });

      // Um array de notificações é criado
      // A notificação é criada para o usuário que está em um raio de 2km
      const notifications = [];
      listUsers.map((item) => {
        let { latitude: lat2, longitude: long2 } = item;
        lat2 = Number(lat2);
        long2 = Number(long2);
        const pointCoordinates = { lat2, long2 };

        let distance = calculateDistance(centerCoordinates, pointCoordinates);
        if (distance < 2) {
          if (distance < 1) {
            distance = `${(distance * 1000).toPrecision(3)} m de distância`;
          } else {
            distance = `${(distance).toPrecision(3)} Km de distância`;
          }

          const notification = {
            title: 'Adoção por perto!',
            subtitle: `Pet para adoção à ${distance}`,
            type: 'create',
            user_id: item.id,
            pet_id: pet.id,
          };

          notifications.push(notification);
        }
      });

      // Cria a schema de notificações
      if (notifications) {
        await Notification.insertMany(notifications);
      }
    }
    return response.json(pet);
  }

  async list(request, response) {
    const { ne } = Sequelize.Op;
    const petsData = await Pets.findAll({
      where: {
        id_user: {
          [ne]: request.userId,
        },
      },
      includes: ['id', 'name', 'sex'],
      order: [['created_at', 'DESC']],
    });

    if (!petsData) {
      return response.status(204).json({ error: 'No pets' });
    }

    return response.json(petsData);
  }

  async filter(request, response) {
    const user = await User.findByPk(request.userId);
    if (!user) {
      return response.status(400).json({ error: 'User not find' });
    }

    const db = new Sequelize(dbConfig);
    const {
      name, state = user.state, city = user.city, type, sex, items, radius,
    } = request.body;

    let results = await db.query('SELECT P.id, P.name, P.image, P.sex, P.type, P.latitude, P.longitude, P.items, U.name as user_name FROM pets P INNER JOIN users U ON P.id_user = U.id WHERE U.state = :state AND U.city = :city', {
      replacements: {
        state, city,
      },
      type: QueryTypes.SELECT,
    });

    if (name) {
      results = results.filter((item) => item.user_name === name);
    }

    if (type) {
      results = results.filter((item) => item.type === type);
    }

    if (sex) {
      results = results.filter((item) => item.sex === sex);
    }

    if (radius) {
      let { latitude: lat1, longitude: long1 } = user;
      lat1 = Number(lat1);
      long1 = Number(long1);
      const centerCoordinates = { lat1, long1 };

      results = results.filter((item) => {
        let { latitude: lat2, longitude: long2 } = item;
        lat2 = Number(lat2);
        long2 = Number(long2);
        const pointCoordinates = { lat2, long2 };

        const distance = calculateDistance(centerCoordinates, pointCoordinates);
        if (distance <= radius) {
          return item;
        }
      });
    }

    if (items) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < items.length; i++) {
        results = results.filter((item) => item.items.includes(items[i]));
      }
    }

    return response.json(results);
  }

  async remove(request, response) {
    const userData = await User.findByPk(request.userId);
    if (!userData) {
      return response.status(400).json({ error: 'User not find' });
    }

    const { id } = request.params;

    Pets.destroy({
      schema: 'pets',
      where: {
        id,
        id_user: userData.id,
      },
    });

    return response.status(200).json({ success: 'Instance removed' });
  }
}

export default new PetsController();
