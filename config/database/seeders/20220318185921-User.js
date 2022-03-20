'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      userName: 'John.Doe',
      password: bcrypt.hashSync('1234', 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Sam',
      lastName: 'Smith',
      userName: 'Sam.Smith',
      password: bcrypt.hashSync('1234', 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Billy',
      lastName: 'Idol',
      userName: 'Billy.Idol',
      password: bcrypt.hashSync('1234', 8),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};