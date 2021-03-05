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
      name, state = user.state, city = user.city, type, sex,
    } = request.body;

    const results = await db.query('SELECT P.id, P.name, P.type, P.sex, U.name as user_name FROM pets P INNER JOIN users U on P.id_user = U.id WHERE U.state = :state and U.city = :city', {
      replacements: {
        state, city,
      },
      type: QueryTypes.SELECT,
    });

    const newResults = results.filter((item) => item.sex === sex);

    return response.json(newResults);
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
