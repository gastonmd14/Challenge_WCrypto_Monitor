'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    static associate(models) {
      Wallet.belongsTo(models.User, {
        as: 'user',
        foreingKey: 'userId',
      });
    }
  }
  Wallet.init({
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(10,2)
    },
    userId: {
      type: DataTypes.INTEGER,
      references: 'Users',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};