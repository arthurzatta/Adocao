import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Pets from '../app/models/Pets';
import Favorites from '../app/models/Favorites';

const models = [User, Pets, Favorites];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb+srv://adocao:ekIIhWBsUNb9as29@cluster0.brtp0.mongodb.net/adocao?retryWrites=true&w=majority',
      { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true },
    );

    const { connection } = mongoose;

    connection.once('open', () => {
      console.log('MongoDB database connection established successsfuly');
    });
  }
}

export default new Database();
