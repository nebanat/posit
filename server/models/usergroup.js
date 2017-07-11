'use strict';
module.exports = (sequelize, DataTypes)=> {
  const UserGroup = sequelize.define('UserGroup', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,

    }, 
    groupId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }, 
    
  }, {
    classMethods: {
      associate:(models)=> {
        // associations can be defined here
        UserGroup.belongsTo(models.User, {foreignKey:'userId'});
        UserGroup.belongsTo(models.Group, {foreignKey:'groupId'});
      }
    }
  });
  return UserGroup;
};