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
        
      } 
    }
  });
  return User;
};