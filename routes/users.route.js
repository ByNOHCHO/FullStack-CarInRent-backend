const {Router} = require('express')
const {usersController} = require('../controllers/users.controller')
const route = Router()

route.get('/admin/users', /* миддлвейр */ usersController.showAllUsers)

module.exports = route