import Favorites from '../models/Favorites';
import Pets from '../models/Pets';
import User from '../models/User';

class FavoritesController {
  async create(request, response) {
    const { idUser, idPet } = request.body;
    const user = await User.findByPk(idUser);
    const pet = await Pets.findByPk(idPet);

    if (!user || !pet) {
      return response.status(400).json({ error: 'Not find' });
    }

    Favorites.create(request.body);

    return response.status(200).json({ success: 'OK' });
  }

  async list(request, response) {
    const { idUser } = request.body;
    const favorites = Favorites.findAll({
      where: {
        id_user: idUser,
      },
    });

    return response.status(200).json({ favorites });
  }

  async remove(request, response) {
    const { idUser, idPet } = request.body;
    const user = await User.findByPk(idUser);
    const pet = await Pets.findByPk(idPet);

    if (!user || !pet) {
      return response.status(400).json({ error: 'Not find' });
    }

    Favorites.destroy({
      schema: 'favorites',
      where: {
        id_user: idUser,
        id_pet: idPet,
      },
    });

    return response.status(200).json({ success: 'Instance Removed' });
  }
}

export default new FavoritesController();
