

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Message body cannot be empty'
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'User has to create a message'
        }
      }
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'A message has to be posted to a group'
        }
      }
    },
    priority: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Set message priority'
        }
      }
    }

  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        Message.belongsTo(models.User, { foreignKey: 'userId', as: 'message' });
        Message.belongsTo(models.Group, { foreignKey: 'groupId', as: 'user' });
      }
    }
  });
  return Message;
};
