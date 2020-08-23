'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('finance_accounts', [{
      name: 'example finance name',
      type: 'example type',
      id_user: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('finance_accounts', null, {});
    
  }
};
