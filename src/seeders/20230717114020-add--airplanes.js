'use strict';
const { Op } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber: 'airbus 789',
        capacity: 700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'airbus 112',
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'airbus 223',
        capacity: 790,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {
        [Op.or]:[
          {modelNumber:'airbus 1122'},
          {modelNumber:'airbus 112'}
      ]
    });
  }
};
