import { Sequelize } from 'sequelize';
import Pets from '../models/Pets';
import User from '../models/User';

class PetsController {
  async create(request, response) {
    const petObj = request.body;
    petObj.id_user = request.userId;
    const pets = await Pets.create(petObj);
    return response.json({ pets });
  }

  async list(request, response) {
    const { ne } = Sequelize.Op;
    const petsData = await Pets.findAll({
      where: {
        id_user: {
          [ne]: request.userId,
        },
      },
      order: [['created_at', 'DESC']],
    });

    if (!petsData) {
      return response.status(400).json({ error: 'No pets' });
    }

    return response.json(petsData);
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
