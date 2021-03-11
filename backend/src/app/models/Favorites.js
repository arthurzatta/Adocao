import Sequelize, { Model } from 'sequelize';

class Favorites extends Model {
  static init(sequelize) {
    super.init(
      {
        id_user: Sequelize.INTEGER,
        id_pet: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

export default Favorites;