'use strict';
module.exports = (sequelize, DataTypes)=> {
  const Message = sequelize.define('Message', {
    content:{
      type:DataTypes.STRING,
      allowNull:false,
    } ,
    groupId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }, 
    priority:{
      type:DataTypes.INTEGER,
      allowNull:false,
    }
     
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Message.belongsTo(models.User, {foreignKey:'userId'});
        Message.belongsTo(models.Group, {foreignKey:'groupId'});
      }
    }
  });
  return Message;
};