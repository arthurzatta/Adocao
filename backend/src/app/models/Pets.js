import Sequelize, { Model } from 'sequelize';

class Pets extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        image: Sequelize.STRING,
        sex: Sequelize.CHAR(1),
        latitude: Sequelize.INTEGER,
        longitude: Sequelize.INTEGER,
        is_lost: Sequelize.BOOLEAN,
        id_user: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
      },
      {
        sequelize,
      },
    );
  }
}

export default Pets;
