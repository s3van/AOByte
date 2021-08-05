const ApiError = require("../exceptions/apiError")
const BookModel = require("../models/bookModel")
const userModel = require("../models/userModel")
const UserModel = require("../models/userModel")

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
            owner: email
        })
        const user = await UserModel.findOne({ email })
        if(!user) throw ApiError.BadRequest(`User with this email was not found`)
        const savedBook = await book.save()
        return {
            savedBook,
            role: user.roles
        }
    }

    async deleteOneBook(_id) {
        const deletedBook = await BookModel.deleteOne({ _id })
        return deletedBook
    }

    async updateOneBook(title, description, author, genre, year, img, rating, id, link, email) {
        const user = await UserModel.findOne({ email })
        if(!user) throw ApiError.BadRequest(`User with this email was not found`)
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
                    owner: email,

                },
                $push: {
                    rating: rating,
                }
            })
        return {
            ...updatedBook,
            role: user.roles
        }
    }

    async deleteManyBooks(ids) {
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


    async getBatchBooks(query, dbQuery, sort, pageOptions) {

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