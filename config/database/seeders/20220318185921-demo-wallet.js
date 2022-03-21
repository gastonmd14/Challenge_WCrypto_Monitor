'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wallets', [{
      name: 'bitcoin',
      price: '41940',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'bitcoin',
      price: '41940',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'bitcoin',
      price: '41940',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Wallets', null, {});
  }
};