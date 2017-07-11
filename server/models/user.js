//const group = require('./models').Group
module.exports = (sequelize, DataTypes)=> {
  const User = sequelize.define('User', {
    username:{
      type: DataTypes.STRING,
      allowNull:true,
    }, 
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    }, 
    password:{
      type: DataTypes.STRING,
      allowNull:false,
    } 
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
        User.belongsToMany(models.Group,{through:'UserGroup',foreignKey:'userId'})

        User.hasMany(models.Message,{onDelete:'CASCADE',foreignKey:'userId'})
        
      } 
    }
  });
  return User;
};