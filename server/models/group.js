'use strict';
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    name:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    description:{
      type:DataTypes.TEXT
    }
     
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Group;
};