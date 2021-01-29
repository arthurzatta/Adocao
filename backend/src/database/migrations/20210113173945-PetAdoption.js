const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('Adoptions', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ARRAY(DataTypes.CHAR(2)),
        allowNull: true,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
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
    queryInterface.dropTable('Adoptions');
  }
};
