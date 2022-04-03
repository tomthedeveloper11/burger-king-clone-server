const express = require('express')
let router = express.Router()
const ItemsController = require('../controllers/itemsController')
const { authentication } = require('../middlewares/authentication')

router.get('/', authentication, ItemsController.getItems)
router.post('/', authentication, ItemsController.createItem)
router.get('/:id', authentication, ItemsController.getItemById)

router.put('/:id', authentication, ItemsController.updateItem)
router.delete('/:id', authentication, ItemsController.deleteItem)

module.exports = router
