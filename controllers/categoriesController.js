const { Item, Category, Ingredient, User } = require('../models/index')

class CategoriesController {
  static async getCategories(req, res, next) {
    try {
      let allCategories = await Category.findAll({
        order: [['id', 'ASC']],
      })
      res.status(200).json(allCategories)
    } catch (error) {
      next(error)
    }
  }

  static async createCategory(req, res, next) {
    let { name, imgUrl } = req.body

    try {
      let newCategory = await Category.create({
        name,
        imgUrl,
      })

      res.status(201).json({
        message: 'Category Created',
        newCategory,
      })
    } catch (error) {
      next(error)
    }
  }

  static async getCategoryById(req, res, next) {
    let categoryId = req.params.id

    try {
      let category = await Category.findByPk(categoryId)

      if (category === null) {
        throw {
          name: 'Category not found',
          message: 'Category not found',
        }
      } else {
        res.status(200).json(category)
      }
    } catch (error) {
      next(error)
    }
  }

  static async updateCategory(req, res, next) {
    let categoryId = req.params.id

    let { name, imgUrl } = req.body

    try {
      let returnedData = await Category.update(
        {
          name,
          imgUrl,
        },
        {
          where: {
            id: categoryId,
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

  static async deleteCategory(req, res, next) {
    let categoryId = req.params.id

    try {
      let category = await Category.findByPk(categoryId)

      Category.destroy({
        where: {
          id: categoryId,
        },
      })
      res.status(200).json({
        message: `Item with name ${category.name} has been deleted`,
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CategoriesController
