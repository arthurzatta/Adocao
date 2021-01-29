const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Losts', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
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
    queryInterface.dropTable('Losts');
  },
};
