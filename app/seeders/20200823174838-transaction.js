'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('finance_transactions', [{
      finance_name: 'example finance name',
      id_user: 1,
      id_account: 1,
      amount: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('finance_transactions', null, {});
    
  }
};
