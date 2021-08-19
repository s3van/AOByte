const ApiError = require("../exceptions/apiError")
const BookModel = require("../models/bookModel")
const fs = require("fs")
const path = require("path")
const { body } = require('express-validator');

class BookService {

    async postBook(title, description, author, genre, year, img, link, email) {
        const book = new BookModel({
            title: title,
            description: description,
            author: author,
            genre: genre,
            year: year,
            img: img,
            downloadLink: link,
            owner: email,
        })
        const savedBook = await book.save()
        return {
            savedBook,
        }
    }

    async deleteOneBook(_id) {
        const book = await BookModel.findOne({ _id })
        if (book) {
            fs.unlinkSync(path.join(__dirname, `../${book.img}`))
        }
        const deletedBook = await BookModel.deleteOne({ _id })
        if (deletedBook.deletedCount === 0) throw ApiError.BadRequest(`Books not found`)
        return deletedBook
    }

    async updateOneBook(title, description, author, genre, year, img, id, link, owner) {
        const updatedBook = await BookModel.updateOne({ _id: id },
            {
                $set: {
                    title: title,
                    description: description,
                    author: author,
                    genre: genre,
                    year: year,
                    img: img,
                    downloadLink: link,
                    owner: owner,
                },

            })
        return {
            updatedBook,
        }
    }

    async assessBook(rating, appraiser, id) {
        const book = await BookModel.findOne({ _id: id })
        if (book.appraisers.includes(appraiser)) throw ApiError.BadRequest(`You have already rated this book`)
        const assessedBook = await BookModel.updateOne({ _id: id },
            {
                $push: {
                    rating: {
                        $each: [rating]
                    },
                    appraisers: {
                        $each: [appraiser]
                    },
                }
            })

        return assessedBook
    }

    async addComment(comment, commentator, id) {
        const book = await BookModel.findOne({ _id: id })
        if (!book) throw ApiError.BadRequest(`Book not found`)
        const commentedBook = await BookModel.updateOne({ _id: id },
            {
                $push: {
                    comments: {
                        comment: comment,
                        commentator: commentator
                    },
                }
            })

        return commentedBook
    }

    async deleteManyBooks(ids) {
        const books = await BookModel.find({
            "_id": {
                $in: ids
            }
        })
        let imgs = books.map((book) => {
            return book.img
        })
        if (imgs) {
            imgs.forEach((imgpath) => {
                fs.unlinkSync(path.join(__dirname, `../${imgpath}`))
            })
        }
        const deletedBooks = await BookModel.deleteMany({
            _id: {
                $in:
                    ids
            }
        })
        if (deletedBooks.deletedCount === 0) throw ApiError.BadRequest(`Books not found`)
        return deletedBooks
    }

    async getSingleBook(_id) {
        const singleBook = await BookModel.findOne({ _id })
        if (!singleBook) throw ApiError.BadRequest(`Book not found`)
        return singleBook
    }

    async getBatchBooks(query, dbQuery, sort, pageOptions, genre) {

        if (query.sort) {
            switch (query.sort) {
                case 'a-z':
                    sort.title = 1;
                    break;
                case 'z-a':
                    sort.title = -1;
                    break;
            }
        }
        if (query.search) {
            const searchReg = new RegExp(query.search, 'ig');
            dbQuery.$or = [{ title: searchReg }, { author: searchReg }];
        }        
        if (query.genre) {
            const genreReg = new RegExp(query.genre, 'ig');
            dbQuery.$or = [{ genre: genreReg }];
        }
        const booksCount = await BookModel.find()
        const books = await BookModel.find(dbQuery)
            .sort(sort)
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
        if (!books.length) {
            return {
                books: []
            }
        }
        return {
            books,
            booksCount: booksCount.length
        }
    }

}

module.exports = new BookService()