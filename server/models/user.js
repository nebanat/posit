

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      isUnique: true,
      // validations for the username field defined//
      validate: {
        // validates that the username doesnt already exist//
        isUnique: sequelize.validateIsUnique('username', 'Username already exist. please choose another one'),
        notEmpty: {
          args: true,
          msg: 'username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      // validations for the email field defined//
      validate: {
        // validates that the email doesnt already exist//
        isUnique: sequelize
          .validateIsUnique('email', 'Email already exist'),
        isEmail: {
          args: true,
          msg: 'A valid email is required',
        },
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        }

      }

    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 5,
          msg: 'Password must be at least 5 characters'
        },
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty'
        }

      }
    }
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        User.belongsToMany(models.Group, { as: 'userGroups',
          through: 'UsersGroups',
          foreignKey: 'userId' });

        User.hasMany(models.Message, { foreignKey: 'userId', as: 'messages' });
      }
    }
  });
  return User;
};
