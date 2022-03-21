'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Wallet, {
        as: 'wallet',
        foreingKey: 'walletId',
      });      
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    walletId: {
      type: DataTypes.INTEGER,
      references: 'Wallets',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};