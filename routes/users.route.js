const {Router} = require('express')
const {usersController} = require('../controllers/users.controller');
const { registerValidation } = require('../models/middlewares/check.auth');
const router = Router()

// route.get('/admin/users', /* миддлвейр */ usersController.showAllUsers)
router.post('/registration', registerValidation, usersController.registration);

module.exports = router;