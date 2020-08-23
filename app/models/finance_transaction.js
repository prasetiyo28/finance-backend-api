'use strict';
module.exports = (sequelize, DataTypes) => {
  const finance_transaction = sequelize.define('finance_transaction', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: {
      type : DataTypes.INTEGER,
    },
    finance_name: {
      type : DataTypes.STRING
    },
    id_account: {
      type : DataTypes.INTEGER,
    },
    amount: {
      type : DataTypes.DOUBLE
    },
    description:{
      type : DataTypes.TEXT,
    } ,
    deleted: {
      type : DataTypes.BOOLEAN
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
  }, {});
  finance_transaction.associate = function(models) {
    finance_transaction.belongsTo(models.finance_account, {
      foreignKey: 'id_account'
     });
  };
  return finance_transaction;
};