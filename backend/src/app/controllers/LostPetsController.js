import { Sequelize } from 'sequelize';

import LostPets from '../models/LostPets';
import User from '../models/User';
import calculateDistance from '../../utils/calculateDistance';
import Notification from '../schemas/Notification';

class LostPetsController {
  async create(request, response) {
    const petObj = request.body;

    const user = await User.findByPk(request.userId);

    if (!user) {
      return response.status(400).json({ error: 'User not find' });
    }

    const pet = await LostPets.create({
      latitude: petObj.latitude,
      longitude: petObj.longitude,
      id_user: user.id,
      ...petObj,
    });

    // Pega as coordenadas do dono do pet
    const lat1 = Number(petObj.latitude);
    const long1 = Number(petObj.longitude);
    const centerCoordinates = { lat1, long1 };

    // Percorre um array de usuarios (exceto o dono)
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
    await listUsers.map((item) => {
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
          title: 'Pet perdido!',
          subtitle: `Pet perdido à ${distance}`,
          type: 'lost',
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

    return response.json(pet);
  }

  async show(request, response) {
    const { id } = request.params;

    const pet = await LostPets.findOne({
      where: { id },
      attributes: ['name', 'description', 'image', 'latitude', 'longitude'],
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'city', 'state', 'phone', 'image'],
      }],
    });

    if (!pet) {
      return response.status(204).json({ error: 'Pet not found' });
    }

    return response.json(pet);
  }

  async remove(request, response) {
    const userData = await User.findByPk(request.userId);

    if (!userData) {
      return response.status(400).json({ error: 'User not find' });
    }

    const { id } = request.params;

    LostPets.destroy({
      schema: 'lost_pets',
      where: {
        id,
        id_user: userData.id,
      },
    });

    return response.status(200).json({ success: 'Instance removed' });
  }
}

export default new LostPetsController();
