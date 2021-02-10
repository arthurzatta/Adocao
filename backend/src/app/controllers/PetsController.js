import Pets from '../models/Pets';
import User from '../models/User';

class PetsController {
  async create(request, response) {
    const pets = await Pets.create(request.body);
    return response.json({ pets });
  }

  async list(request, response) {
    const petsData = await Pets.findAll();

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

    Pets.destroy({
      schema: 'pets',
      where: {
        id: request.petsId,
        id_user: userData.id,
      },
    });

    return response.status(200).json({ success: 'Instance removed' });
  }
}

export default new PetsController();
