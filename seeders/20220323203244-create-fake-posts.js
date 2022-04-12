'use strict';

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
     await queryInterface.bulkInsert('posts', [
      {
        name: "John Doe",
        uuid: "a7711483-83b7-4610-87bd-49de4b214af2",
        userId: "1",
        createdAt: Date.now(),
        updatedAt: "2022-03-23T17:50:34.000Z"
      },
      {
        name: "Max Doe",
        uuid: "a7711483-83b7-4610-87bd-49de4b214afe",
        userId: "1",
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        name: "Inna Dudyk",
        uuid: "a7711483-83b7-4610-87bd-49de4b214af1",
        userId: "2",
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('posts', null, {});
  }
};
