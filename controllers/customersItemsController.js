const {
  Item,
  Category,
  Ingredient
} = require('../models/index')

class CustomersItemController {
  static async getItems(req, res, next) {
    try {
      let allItems = await Item.findAll({
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
        order: [['id', 'ASC']],
      })
      res.status(200).json(allItems)
    } catch (error) {
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
}

module.exports = CustomersItemController
