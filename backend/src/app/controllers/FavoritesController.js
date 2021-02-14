import { Sequelize, QueryTypes } from 'sequelize';
import Favorites from '../models/Favorites';
import Pets from '../models/Pets';
import dbConfig from '../../config/database';

class FavoritesController {
  async create(request, response) {
    const { id } = request.params;

    const searchedPet = await Pets.findByPk(id);
    if (searchedPet) {
      const searchedFavorite = await Favorites.findOne({
        where: {
          id_user: request.userId,
          id_pet: id,
        },
      });

      if (!searchedFavorite) {
        Favorites.create({
          id_user: request.userId,
          id_pet: id,
        });
        return response.status(200).json({
          id,
          name: searchedPet.name,
          description: searchedPet.description,
          id_user: request.userId,
        });
      }
    }

    return response.status(400).json({ error: 'Not permited' });
  }

  async list(request, response) {
    const db = new Sequelize(dbConfig);
    const results = await db.query('SELECT * FROM pets, favorites WHERE favorites.id_pet = pets.id AND favorites.id_user = :id', {
      replacements: { id: request.userId },
      type: QueryTypes.SELECT,
    });
    return response.status(200).json(results);
  }

  async remove(request, response) {
    const { id } = request.params;

    Favorites.destroy({
      schema: 'favorites',
      where: {
        id_user: request.userId,
        id_pet: id,
      },
    });

    return response.status(200).json({ success: 'Instance Removed' });
  }
}

export default new FavoritesController();
