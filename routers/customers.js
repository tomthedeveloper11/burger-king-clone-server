const express = require('express');
let router = express.Router()
const CustomersItemsController = require('../controllers/customersItemsController');

router.get('/items', CustomersItemsController.getItems)
router.get('/items/:id', CustomersItemsController.getItemById)

module.exports = router