const express = require("express")
const router = express.Router()
const Book = require("../models/Book")
const authMiddleware = require("../middlewares/authMiddleware")
const roleMiddleware = require("../middlewares/roleMiddleware")

//GET BACK ALL THE BOOKS
router.get("/",  async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (err) {
        res.json(err)
    }
})

//SUBMIT A BOOKS
router.post("/", roleMiddleware(["ADMIN"]), async (req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
    })
    try {
        const savedBook = await book.save();
        res.json(savedBook)
    } catch (err) {
        res.json(err)
    }
})

//UNIQUE BOOK
router.get("/:bookId", async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId)
        res.json(book)
    } catch (err) {
        res.json(err)
    }
})

//DELETE A BOOK
router.delete("/:bookId", authMiddleware, async (req, res) => {
    try {
        const removedBook = await Book.deleteOne({ _id: req.params.bookId })
        res.json(removedBook)
    } catch (err) {
        res.json(err)
    }
})

//UPDATE A BOOK
router.patch("/:bookId", authMiddleware, async (req, res) => {
    try {
        const updatedBook = await Book.updateOne({ _id: req.params.bookId },
            {
                $set: { title: req.body.title },
                $set: { description: req.body.description },
                $set: { author: req.body.auhtor },

            })
        res.json(updatedBook)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router