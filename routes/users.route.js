const {Router} = require('express')
const {usersController} = require('../controllers/users.controller');
const { registerValidation, loginValidator } = require('../models/middlewares/check.auth');
const { checkAuth } = require('../models/middlewares/auth.middleware');
const router = Router()

router.get('/user',  usersController.showOneUser)
router.post('/registration', registerValidation, usersController.registration);
router.post('/login', loginValidator, usersController.login);
// router.patch('/cars/:id', checkAuth, usersController.addCarInRent);


module.exports = router;