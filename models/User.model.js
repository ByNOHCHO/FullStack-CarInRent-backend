const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    login: String,
    password: String,
    email: String,
    carInRent: [{
        car: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Cars"
        }
    }]

})

const User = mongoose.model('User', userSchema)
module.exports = User