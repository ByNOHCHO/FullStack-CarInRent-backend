const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');

module.exports.usersController = {
    showOneUser: async (req, res) => {

        try {
            const data = await User.findById(req.params.id)
            res.json(data)
        } catch (error) {
            res.status(404).json(error)
        }

    },

    addIsRent: async (req, res) => {
        try {
          const addedIsRent = await User.findByIdAndUpdate(
            req.params.userId,
            {
              $push: {
                carInRent: {
                  car: req.body.car,
                },
              },
            },
            { new: true }
          );
          return res.json(addedIsRent);
        } catch (err) {
          return res.json(err);
        }
      },

      deleteIsRent: async (req, res) => {
        try{
            await User.findByIdAndUpdate(req.params.id, {
                $pull: {
                    carInRent: {
                        _id: req.body._id
                    }
                }
            })
            res.json("deleted")
        } catch (err) {
            res.json(err)
        }
      },

    deleteUser: async (req, res) => {
            try {
                const data = await User.findByIdAndDelete(req.params.id)
                res.json(data)
            } catch (error) {
                res.json(error.message)
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
            res.status(400).json({ message: "Authorization error" })
        }


    },
}
