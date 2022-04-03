const express = require('express')
let router = express.Router()
const IndexController = require('../controllers/indexController')
const { authentication } = require('../middlewares/authentication')

router.get('/', IndexController.redirect)
router.post('/login', IndexController.login)
router.post('/register',authentication, IndexController.register)

module.exports = router
