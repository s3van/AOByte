const Router = require("express")
const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")
const router = new Router()
const { body } = require("express-validator")
const authMiddleWare = require("../middlewares/authMiddleware")
const roleMiddleWare = require("../middlewares/roleMiddleware")
const imgMiddleWare = require("../middlewares/imgMiddleware.js")

router.post("/users",
    body("email").isEmail(),
    body("password").isLength({ min: 5, max: 30 }),
    userController.registration)
//registration & authorization
router.post("/login", userController.login)
router.post("/logout", userController.logut)
router.get("/activate/:link", userController.activate)
router.get("/refresh", userController.refresh)
//options
router.get("/users", authMiddleWare, userController.getUsers)
router.get("/books", authMiddleWare, bookController.getBatchBooks)
router.post("/books", roleMiddleWare(["ADMIN"]), bookController.postBook)
router.post("/images", roleMiddleWare(["ADMIN"]), imgMiddleWare.single("avatar"), bookController.postImage)
router.delete("/books/:bookId", roleMiddleWare(["ADMIN"]), bookController.deleteBook)
router.post("/books/batchDelete", roleMiddleWare(["ADMIN"]), bookController.deleteBooks)
router.patch("/books/:bookId", roleMiddleWare(["ADMIN"]), bookController.updateBook)
router.get("/books/:bookId",  authMiddleWare, bookController.getSingle)

module.exports = router
