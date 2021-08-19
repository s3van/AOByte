const ApiError = require("../exceptions/apiError")
const bookService = require("../service/bookService")

class BookController {

    async postImage(req, res, next) {
        try {
            if (!req.file) {
                throw ApiError.BadRequest(`Please add image`)
            }
            res.json(req.file)
        } catch (e) {
            next(e)
        }
    }

    async postBook(req, res, next) {
        try {
            const { title, description, author, genre, year, img, link, owner } = req.body
            const savedBook = await bookService.postBook(title, description, author, genre, year, img, link, owner)
            return res.json(savedBook)
        } catch (e) {
            next(e)
        }
    }

    async addRating(req, res, next) {
        try {
            const { id, rating } = req.body
            await bookService.addRating(id, rating)
        } catch (e) {

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
            const {
                title,
                img,
                description,
                author,
                genre,
                year,
                owner,
                link,
                comment,
                rating,
                appraiser,
                commentator } = req.body
            const id = req.params.bookId
            if (!!title) {
                const updatedBook = await bookService.updateOneBook(
                    title, description, author, genre, year, img, id, link, owner
                )
                return res.json(updatedBook)
            }
            else if (!!comment) {
                const commentedBook = await bookService.addComment(
                    comment, commentator, id
                )
                return res.json(commentedBook)
            }
            else if (!!rating) {
                const assessedBook = await bookService.assessBook(
                    rating, appraiser, id
                )
                return res.json(assessedBook)
            }
        } catch (e) {
            next(e)
        }
    }

    async getSingle(req, res, nex) {
        try {
            const id = req.params.bookId
            const singleBook = await bookService.getSingleBook(id)
            return res.json(singleBook)
        } catch (e) {

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
            const genre = {}
            const pageOptions = {
                page: parseInt(req.query.page, 10) || 0,
                limit: parseInt(req.query.limit, 10) || 12
            }
            const batchBooks = await bookService.getBatchBooks(query, dbQuery, sort, pageOptions, genre)
            return res.json(batchBooks)
        }
        catch (e) {
            res.json(e)
            next(e)
        }
    }

}

module.exports = new BookController()