'use strict';
module.exports = (sequelize, DataTypes) => {
  const finance_account = sequelize.define('finance_account', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: {
      allowNull : false,
      type : DataTypes.INTEGER
    },
    name: {
      allowNull : false,
      type : DataTypes.STRING(100),
    },
    type: {
      allowNull : false,
      type : DataTypes.STRING(50),
    },
    description: {
      type : DataTypes.TEXT,
    },
    deleted: {
      allowNull : false,
      type : DataTypes.BOOLEAN,
      defaultValue : false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      defaultValue : null
    } 
  }, {});
  finance_account.associate = function(models) {
    // associations can be defined here
  };
  return finance_account;
};