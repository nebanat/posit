'use strict';
module.exports = (sequelize, DataTypes)=> {
  const User = sequelize.define('User', {
    username:{
      TYPE:DataTypes.STRING,
      allowNull:false,
      unique:true
    }, 
    email:{
      TYPE:DataTypes.STRING,
      allowNull:false,
      unique:true
    }, 
    password:{
      TYPE:DataTypes.STRING,
      allowNull:false,
    } 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      } 
    }
  });
  return User;
};