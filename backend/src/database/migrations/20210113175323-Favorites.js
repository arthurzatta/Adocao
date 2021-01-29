const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Favorites', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      isLost: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      id_pet: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Pets',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Favorites');
  },
};
