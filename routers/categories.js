const express = require('express')
let router = express.Router()
const CategoriesController = require('../controllers/categoriesController')
const { authentication } = require('../middlewares/authentication')

router.get('/', authentication, CategoriesController.getCategories)
router.post('/', authentication, CategoriesController.createCategory)
router.get('/:id', authentication, CategoriesController.getCategoryById)

router.put('/:id', authentication, CategoriesController.updateCategory)
router.delete('/:id', authentication, CategoriesController.deleteCategory)

module.exports = router
