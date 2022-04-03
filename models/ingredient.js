'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      Ingredient.belongsToMany(models.Item, {through: models.ItemIngredient,  foreignKey: 'ingredientId'})
    }
  }
  Ingredient.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Ingredient name is required',
          },
          notEmpty: {
            msg: 'Ingredient name is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Ingredient',
    }
  )
  return Ingredient
}
