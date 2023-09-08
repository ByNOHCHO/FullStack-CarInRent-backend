const mongoose = require('mongoose')

const userSchema = mongoose.Schema ({
    nickname: String,
    login: String,
    password: String,
    email: String,
    role: String
})

const User = mongoose.model('User', userSchema)
module.exports = User