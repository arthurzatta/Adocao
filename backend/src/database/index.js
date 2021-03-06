import '../bootstrap';

import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Pets from '../app/models/Pets';
import LostPets from '../app/models/LostPets';
import Favorites from '../app/models/Favorites';

const models = [User, Pets, LostPets, Favorites];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true },
    );

    const { connection } = mongoose;

    connection.once('open', () => {
      console.log('MongoDB database connection established successsfuly');
    });
  }
}

export default new Database();
