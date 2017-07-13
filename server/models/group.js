'use strict';
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          args:true,
          msg:"Group name cannot be empty"
        }
      }
    }, 
    description:{
      type:DataTypes.TEXT,
      validate:{
        max:{
          args:300,
          msg:'Group description cannot exceed 300 characters'
        }
      }
    }
     
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Group.belongsToMany(models.User,{as:'groupUsers',through:'UsersGroups',foreignKey:'groupId'})

         Group.hasMany(models.Message,{foreignKey:'userId',as:'messages'})
      }
    }
  });
  return Group;
};