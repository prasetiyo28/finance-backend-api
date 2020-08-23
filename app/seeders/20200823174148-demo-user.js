'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        name: 'example name',
        username: 'examplename',
        email: 'example@email.com',
        password: bcrypt.hashSync('secret', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */

      return queryInterface.bulkDelete('users', null, {});
  }
};
