'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('finance_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      finance_name: {
        type: Sequelize.STRING(100),
        allowNull : false
      },
      id_account: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull : false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull : true,
        defaultValue : null
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull : false,
        defaultValue : false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Sequelize.Now
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue : null
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('finance_transactions');
  }
};