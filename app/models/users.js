'use strict';
module.exports = function(sequelize, DataTypes){
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(50)
    },
    username: {
      type: DataTypes.STRING(30)
    },
    email: {
      type: DataTypes.STRING(100)
    },
    password: {
      type: DataTypes.STRING(250)
    },
    last_login: {
      type: DataTypes.DATE,
      defaultValue : sequelize.literal('CURRENT_TIMESTAMP')
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    tableName:'users'
  });
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.finance_account, {
      foreignKey: 'id_user'
    });
    
  };
  return users;
};