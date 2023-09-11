const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema({
user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
},
cars:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Cars"
},
text: String,
rating: Number
})

const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports = Reviews