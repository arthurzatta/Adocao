module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('favorites', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('favorites'),
};
