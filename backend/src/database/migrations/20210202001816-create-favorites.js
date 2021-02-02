module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('favorites', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    id_pet: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'pets',
        key: 'id',
      },
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('favorites'),
};
