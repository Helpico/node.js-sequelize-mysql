'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * 
     */
     await queryInterface.renameColumn('students', 'testScore1', 'quizScore1');
     await queryInterface.renameColumn('students', 'testScore2', 'quizScore2');
     await queryInterface.renameColumn('students', 'testScore3', 'quizScore3');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
     await queryInterface.renameColumn('students', 'quizScore1', 'testScore1');
     await queryInterface.renameColumn('students', 'quizScore2', 'testScore2');
     await queryInterface.renameColumn('students', 'quizScore3', 'testScore3');
  }
};
