
const Role = require("../models/Role")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
const {secret} = require("../config")

const generateAccesToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "1h"})
}

class authController {

    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.send(errors)
            }
            const { username, password } = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                // return res.status(400).json({ message: "a user with the same name already exists" })
                return res.status(403).json({message: "a user with the same name already exists"})
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({ value: "USER" })
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            await user.save()
            return res.status(200).json({message: "user was registered successfully"})
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    }

    async authorization(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({message: `user with ${username} was not found`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: "incorrect password entered"})
            }
            const token = generateAccesToken(user._id, user.roles)
            res.send(token)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.send(users)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    }
}

module.exports = new authController()