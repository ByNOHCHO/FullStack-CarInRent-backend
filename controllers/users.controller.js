const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');

module.exports.usersController = {
    showAllUsers: async (req, res) => {

    },

    registration: async (req, res) => {
        const {email, login, password} = req.body;
        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS)); // Хешируем пароль

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: 'Ошибка регистрации', errors })
            }
            const candidate = await User.findOne({ login })
            if (candidate) {
                return res.status(400).json({ error: "Такой пользователь уже существует" })// валидация по логину
            }
            const users = await User.create({
                email: email,
                login: login,
                password: hash,
            })
            res.json('Пользователь успешно зарегистрирован')
        } catch (error) {
            console.log(e)
            res.status(400).json({ error: "Registration error" })
        }

    },

    login: async (req, res) => {

    },

    changeUser: async (req, res) => {

    },

    deleteUser: async (req, res) => {

    },
}
