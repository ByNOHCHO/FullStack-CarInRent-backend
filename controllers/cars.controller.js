const Cars = require("../models/Cars.model");


module.exports.carsController = {
    addCar: async (req, res) => {
        const { img, name, mark, description, capacity, price } = req.body;
        try {
            const data = await Cars.create({
                name: name,
                mark: mark,
                price: price,
                img: img,
                description: description,
                capacity: capacity
            })
            res.json(data)
        } catch (error) {
            res.status(501).json(error)
        }
    },

    changeCar: async (req, res) => {
        const { img, name, mark, description, capacity, price } = req.body;
        try {
            const data = await Cars.findByIdAndUpdate(req.params.id, {
                name,
                img,
                price,
                mark,
                description,
                capacity
            })
            res.json(data)
        } catch (error) {
            console.log(error)
            res.status(504).json('ошибка при изменении')
        }
    },

    deleteCarsById: async (req, res) => {
        try{
            const deleteCars = await Cars.findByIdAndDelete(req.params.id)
            res.json(deleteCars)
        }catch (err) {
            res.json(err)
        }
    },

    getAllCars: async(req, res) => {
        try{
            const cars = await Cars.find().populate('mark')
            res.json(cars)
        }catch (err) {
            res.json(err)
        }
    },

    getOneCars: async(req, res) => {
        try{
            const oneCars = await Cars.findById(req.params.id).populate('mark')
            res.json(oneCars) 
        }catch (err) {
            res.json(err)
        }
    },

}