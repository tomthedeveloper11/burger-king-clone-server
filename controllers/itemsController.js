const {
  Item,
  Category,
  Ingredient,
  User,
  ItemIngredient,
  sequelize
} = require('../models/index')

class ItemController {
  static async getItems(req, res, next) {
    try {
      let allItems = await Item.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: User,
            attributes: { include: ['email'] },
          },
          {
            model: Category,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Ingredient,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
        order: [['id', 'ASC']],
      })
      res.status(200).json(allItems)
    } catch (error) {
      next(error)
    }
  }

  static async createItem(req, res, next) {
    const t = await sequelize.transaction()
    let {
      name,
      description,
      price,
      imgUrl,
      categoryId,
      ingredient1,
      ingredient2,
    } = req.body

    try {
      let newItem = await Item.create(
        {
          name,
          description,
          price,
          imgUrl,
          authorId: req.currentUser.id,
          categoryId,
        },
        { transaction: t }
      )

      let newIngredients = await Ingredient.bulkCreate(
        [
          {
            name: ingredient1,
          },
          {
            name: ingredient2,
          },
        ],
        { transaction: t }
      )

      await ItemIngredient.bulkCreate(
        [
          {
            itemId: newItem.id,
            ingredientId: newIngredients[0].id,
          },
          {
            itemId: newItem.id,
            ingredientId: newIngredients[1].id,
          },
        ],
        { transaction: t }
      )
      await t.commit()
      res.status(201).json({
        message: 'Item Created',
        newItem,
      })
    } catch (error) {
      await t.rollback()
      next(error)
    }
  }

  static async getItemById(req, res, next) {
    let itemId = req.params.id

    try {
      let item = await Item.findByPk(itemId, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Category,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          {
            model: Ingredient,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      })

      if (item === null) {
        throw {
          name: 'Item not found',
          message: 'Item not found',
        }
      } else {
        res.status(200).json(item)
      }
    } catch (error) {
      next(error)
    }
  }

  static async updateItem(req, res, next) {
    let itemId = req.params.id

    let { name, description, price, imgUrl, categoryId } = req.body

    try {
      let returnedData = await Item.update(
        {
          name,
          description,
          price,
          imgUrl,
          categoryId,
        },
        {
          where: {
            id: itemId,
          },
          returning: true,
        }
      )

      let updatedData = returnedData[1][0]

      res.status(200).json(updatedData)
    } catch (error) {
      next(error)
    }
  }

  static async deleteItem(req, res, next) {
    let itemId = req.params.id
    try {
      let item = await Item.findByPk(itemId)

      Item.destroy({
        where: {
          id: itemId,
        },
      })
      res.status(200).json({
        message: `Item with name ${item.name} has been deleted`,
        item,
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ItemController
