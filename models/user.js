'use strict'
const { Model } = require('sequelize')
const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Item, { foreignKey: 'authorId' })
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: 'Email is required',
          },
          notEmpty: {
            msg: 'Email is required',
          },
          isEmail: {
            msg: 'Invalid email type',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password is required',
          },
          notEmpty: {
            msg: 'Password is required',
          },
          len: {
            args: [5],
            msg: 'Password cannot be less than 5 characters',
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'Admin'
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password)
        },
      },
      sequelize,
      modelName: 'User',
    }
  )
  return User
}
