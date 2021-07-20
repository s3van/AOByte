const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const { check } = require("express-validator")
const authMiddleware = require("../middlewares/authMiddleware")
const roleMiddleware = require("../middlewares/roleMiddleware")

router.post("/registration", [
    check("username", "username cannot be empty").notEmpty(),
    check("password", "password cannot be empty").notEmpty()
], authController.registration)

router.post("/authorization", authController.authorization)

router.get("/users", authMiddleware, authController.getUsers)

module.exports = router