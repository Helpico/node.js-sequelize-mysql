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
     await queryInterface.bulkInsert('users', [{
      name: "John Doe",
      email: "doe@example.com",
      role: "admin",
      uuid: "a7711483-83b7-4610-87bd-49de4b214afe",
      createdAt: "2022-03-23T16:58:51.000Z",
      updatedAt: "2022-03-23T17:50:34.000Z"
    },{
      name: "Jone Doe",
      email: "jane@example.com",
      role: "guest",
      uuid: "a7711483-83b7-4610-87bd-4sde4b214afe",
      createdAt: "2022-03-23T16:58:52.000Z",
      updatedAt: "2022-03-23T17:50:37.000Z"
    }], {});
  },





  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
