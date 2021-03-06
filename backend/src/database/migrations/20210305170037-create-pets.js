module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pets', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: Sequelize.STRING,
    image: Sequelize.STRING,
    sex: Sequelize.CHAR(1),
    latitude: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    longitude: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    is_lost: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    items: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
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
      defaultValue: Sequelize.NOW,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('pets'),
};
