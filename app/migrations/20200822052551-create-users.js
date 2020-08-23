'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      username: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING(100)
      },
      password: {
        type: Sequelize.STRING(250)
      },
      last_login: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: '0000-00-00 00:00:00'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW

      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
