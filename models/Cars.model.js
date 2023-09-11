const mongoose = require('mongoose')

const carsSchema = mongoose.Schema({
   img: String,
   name: String,
   mark : {
    type: mongoose.SchemaTypes.ObjectId,
        ref: 'Mark'
   },
   description: String,
   capacity: Number
})

const Cars = mongoose.model('Cars', carsSchema)

module.exports = Cars