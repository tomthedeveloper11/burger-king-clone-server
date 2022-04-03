'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.User, {foreignKey: 'authorId'});
      Item.belongsTo(models.Category, {foreignKey: 'categoryId'});
      Item.belongsToMany(models.Ingredient, {through: models.ItemIngredient, foreignKey: 'itemId'})
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Item name is required'
        },
        notEmpty: {
          msg: 'Item name is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Item description is required'
        },
        notEmpty: {
          msg: 'Item description is required'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Price is required'
        },
        min: 5000
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image Url is required'
        },
        notEmpty: {
          msg: 'Image Url is required'
        }
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};