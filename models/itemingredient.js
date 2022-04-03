'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ItemIngredient extends Model {
    static associate(models) {
      ItemIngredient.belongsTo(models.Item, { foreignKey: 'itemId' })
      ItemIngredient.belongsTo(models.Ingredient, {
        foreignKey: 'ingredientId',
      })
    }
  }
  ItemIngredient.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Item Id is required',
          },
        },
        references: {
          model: 'Items',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      ingredientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Ingredient Id is required',
          },
        },
        references: {
          model: 'Ingredients',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'ItemIngredient',
    }
  )
  return ItemIngredient
}
