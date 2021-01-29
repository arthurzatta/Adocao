module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('favorites', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    isLost: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    id_user: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    id_pet: {
      type: Sequelize.INTEGER,
      references: {
        model: 'pets',
        key: 'id',
      },
    },
  }),

  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('favorites');
  },
};
