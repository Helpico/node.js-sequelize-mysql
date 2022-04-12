'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    testScore1: DataTypes.INTEGER,
    testScore2: DataTypes.INTEGER,
    testScore3: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'students',
    modelName: 'Student',
  });
  return Student;
};