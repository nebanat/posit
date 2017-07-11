module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull:false,

    }, 
    description:{
      type: DataTypes.TEXT,
      allowNull:true
    } 
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        Group.belongsToMany(models.User,{through:'UserGroup',foreignKey:'groupId'})

        Group.hasMany(models.Message,{onDelete:'CASCADE',foreignKey:'groupId'})
      }
    },
    
  });
  return Group;
};