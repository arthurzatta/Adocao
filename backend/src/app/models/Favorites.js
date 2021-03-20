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
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    this.belongsTo(models.Pets, { foreignKey: 'id_pet', as: 'pet' });
  }
}

export default Favorites;
