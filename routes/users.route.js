const {Router} = require('express')
const {usersController} = require('../controllers/users.controller');
const { registerValidation, loginValidator } = require('../models/middlewares/check.auth');
const { checkAuth } = require('../models/middlewares/auth.middleware');
const router = Router()

router.get('/user/:id',  usersController.showOneUser)
router.delete('/user/:id',  usersController.deleteUser)
router.post('/registration', registerValidation, usersController.registration);
router.post('/login', loginValidator, usersController.login);
router.patch('/user/:userId', usersController.addIsRent)
router.patch('/user/:id/deleted',  usersController.deleteIsRent)

module.exports = router;