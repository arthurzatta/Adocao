module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('pets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: Sequelize.STRING,
      image: Sequelize.STRING,
      sex: Sequelize.CHAR(1),
      latitude: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      is_lost: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('pets'),
};
