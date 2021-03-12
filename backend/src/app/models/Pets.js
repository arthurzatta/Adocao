import Sequelize, { Model } from 'sequelize';

class Pets extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        image: Sequelize.STRING,
        sex: Sequelize.CHAR(1),
        type: Sequelize.STRING,
        items: Sequelize.ARRAY(Sequelize.STRING),
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
        is_lost: Sequelize.BOOLEAN,
        id_user: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

export default Pets;
