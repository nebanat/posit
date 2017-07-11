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
        }
    },
    
  });
  return Group;
};