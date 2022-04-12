'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     await queryInterface.bulkInsert('students', [{
      testScore1: "11",
      testScore2: "21",
      testScore3: "31",
      createdAt: Date.now(),
      updatedAt: Date.now()
    },{
      testScore1: "11",
      testScore2: "21",
      testScore3: "31",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
     await queryInterface.bulkDelete('students', null, {});
  }
};
