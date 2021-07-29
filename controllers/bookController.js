
const ApiError = require("../exceptions/apiError")
const BookModel = require("../models/bookModel")
const bookService = require("../service/bookService")

class BookController {

    async postBook(req, res, next) {
        try {
            const { title, description, author, img } = req.body
            const book = await bookService.postBook(title, description, author, img)
            return res.json(book)
        } catch (e) {
            next(e)
        }
    }

    async deleteBook(req, res, next) {
        try {
            const id = req.params.bookId
            const removedBook = await bookService.deleteOneBook(id)
            return res.json(removedBook)
        } catch (e) {
            next(e)
        }
    }

    async updateBook(req, res, next) {

        try {
            const {_id} = req.params.bookId
            const {title, img, description, author} = req.body
            const updatedBook = await bookSerice.updateOneBook(_id,title,img,description,author)
            return res.json(updatedBook)
        } catch (e) {
            next(e)
        }
    }

    async deleteBooks(req, res, next) {
        try {
            const { ids } = req.body;
            const deletedBooks = await bookService.deleteManyBooks(ids);

            return res.json(deletedBooks);
        } catch (e) {
            next(e)
        }
    }

    async getBatchBooks(req, res, next) {
        try {
            const { query } = req;
            const dbQuery = {};
            const sort = {}
            const pageOptions = {
                page: parseInt(req.query.page, 10) || 0,
                limit: parseInt(req.query.limit, 10) || 10
            }   
            const batchBooks = await bookService.getBatchBooks(query,dbQuery,sort,pageOptions)
            return res.json(batchBooks)
            // if (query.search) {
            //     const searchReg = new RegExp(query.search, 'ig');
            //     dbQuery.$or = [{ title: searchReg }, { author: searchReg }];
            // }
            // const sort = {};
            // if (query.sort) {
            //     switch (query.sort) {
            //         case 'a-z':
            //             sort.title = 1;
            //             break;
            //         case 'z-a':
            //             sort.title = -1;
            //             break;
            //     }
            // }

            // const books = await BookModel.find(dbQuery)
            // if (!books.length) {
            //     throw (ApiError.NotFound("Book not found"))
            // }
            // return res.json(books);
        }
        catch (e) {
            res.json(e)
        }
    }

}

module.exports = new BookController()