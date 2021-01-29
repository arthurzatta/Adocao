import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING(11),
        state: Sequelize.STRING(2),
        city: Sequelize.STRING,
        password: Sequelize.STRING,
        isOng: Sequelize.BOOLEAN,
        date: Sequelize.DATE,
        localization: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default User;
