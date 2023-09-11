const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');

module.exports.usersController = {
    showOneUser: async (req, res) => {

        try {
            const data = await User.findOne({
                login: req.body.login
            })
            res.json(data)
        } catch (error) {
            res.status(404).json(error)
        }

    },

    registration: async (req, res) => {
        const { email, login, password, car } = req.body;
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
                car: car
            })
            res.json('Пользователь успешно зарегистрирован')
        } catch (error) {
            console.log(e)
            res.status(400).json({ error: "Registration error" })
        }

    },

    login: async (req, res) => {

        const { login, password } = req.body;
        try {
            const candidate = await User.findOne({ login });

            if (!candidate) {
                return res.status(401).json({ message: `Пользователь ${login} не найден` })
            }
            const valid = await bcrypt.compare(password, candidate.password);// проверка на корректный пароль

            if (!valid) {
                return res.status(401).json('Введен неверный пароль')
            }
            const payload = {
                id: candidate._id,
                login: candidate.login
            };
            const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
                expiresIn: "24h"
            });

            res.json({
                token
            });

        } catch (e) {
            console.log(e)
            res.status(400).json({ message: "Authorization error" })
        }


    },

    // addCarInRent: async (req, res) => {
    //     try {
    //         const data = User.findByIdAndUpdate(req.params.id, {
    //             $push: {
    //                 carInRent: {
    //                     car: req.params.car
    //                 }
    //             }
    //         })
    //         res.json(data)
    //     } catch (error) {
    //         res.status(402).json(error, 'Ошибка при аренде машины')
    //     }

    // },

    deleteUser: async (req, res) => {

    },
}
