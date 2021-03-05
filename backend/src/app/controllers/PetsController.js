import { Sequelize, QueryTypes } from 'sequelize';
import Pets from '../models/Pets';
import User from '../models/User';
import dbConfig from '../../config/database';

class PetsController {
  async create(request, response) {
    const petObj = request.body;

    petObj.id_user = request.userId;

    const pets = await Pets.create(petObj);

    return response.json(pets);
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
      name, state = user.state, city = user.city, type, sex, items,
    } = request.body;

    let results = await db.query('SELECT P.id, P.name, P.image, P.sex, P.type, P.items, U.name as user_name FROM pets P INNER JOIN users U ON P.id_user = U.id WHERE U.state = :state AND U.city = :city', {
      replacements: {
        state, city,
      },
      type: QueryTypes.SELECT,
    });

    if (name != null) {
      results = results.filter((item) => item.user_name === name);
    }

    if (sex != null) {
      results = results.filter((item) => item.sex === sex);
    }

    if (type != null) {
      results = results.filter((item) => item.type === type);
    }

    if (items != null) {
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
