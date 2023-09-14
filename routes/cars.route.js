const { Router } = require("express")
const { carsController } = require("../controllers/cars.controller")
const router = Router()

router.post('/addCars', carsController.addCar);
router.patch('/changeCars/:id', carsController.changeCar);
router.get('/cars', carsController.getAllCars);
router.get('/cars/:id', carsController.getOneCars);
router.delete('/cars/:id', carsController.deleteCarsById);

module.exports = router