import Sequelize from 'sequelize';
// import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Pets from '../app/models/Pets';
import Favorites from '../app/models/Favorites';

const models = [User, Pets, Favorites];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }

  // mongo() {
  //   this.mongoConnection = mongoose.connect(
  //     'mongodb://localhost:27017/adocao',
  //     { useNewUrlParser: true, useFindAndModify: true },
  //   );
  // }
}

export default new Database();
