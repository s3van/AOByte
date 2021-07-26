
const ApiError = require("../exceptions/apiError")
const BookModel = require("../models/bookModel")

class BookController {

    async getBooks(req, res, next) {
        try {
            const books = await BookModel.find()
            return res.json(books)
            
        } catch (e) {
            res.json(err)
        }
    }

    async postBook(req, res, next) {
        const book = new BookModel({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            img: req.body.img,
        })
        try {
            const savedBook = await book.save()
            return res.json(savedBook)
        } catch (err) {
            res.json(err)
        }
    }

    async deleteBook(req, res, next) {
        try {
            const removedBook = await BookModel.deleteOne({ _id: req.params.bookId })
            res.json(removedBook)
        } catch (err) {
            res.json(err)
        }
    }

    async updateBook(req, res, next) {

        try {
            const updatedBook = await BookModel.updateOne({ _id: req.params.bookId },
                {
                    $set: { title: req.body.title },
                    $set: { description: req.body.description },
                    $set: { author: req.body.auhtor },
                    $set: { img: req.body.img },

                })
            // const _id = req.params.bookId
            res.json(updatedBook)
        } catch (err) {
            res.json(err)
        }
    }

}

module.exports = new BookController()