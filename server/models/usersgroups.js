'use strict';
module.exports = function(sequelize, DataTypes) {
  const UsersGroups = sequelize.define('UsersGroups', {
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    }, 
    groupId:{
      type:DataTypes.INTEGER,
      allowNull:false
    } 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UsersGroups;
};