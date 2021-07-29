const ApiError = require("../exceptions/apiError")
const BookModel = require("../models/bookModel")

class BookService {

    async getBooks() {
        const books = await BookModel.find()
        return books
    }

    async postBook(title, description, author, img) {
        const book = new BookModel({
            title: title,
            description: description,
            author: author,
            img: img,
        })
        const savedBook = await book.save()
        return savedBook
    }

    async deleteOneBook(_id) {
        const deletedBook = BookModel.deleteOne({_id})
        return deletedBook
    }

    async updateOneBook(_id, title, description, author, img) {
        const updatedBook = BookModel.updateOne(_id, {
            $set: { title: title },
            $set: { description: description },
            $set: { author: auhtor },
            $set: { img: img },
        })
        return updatedBook
    }

    async deleteManyBooks(ids) {
        const deletedBooks = BookModel.deleteMany({
            _id: {
                $in:
                    ids
            }
        })
        if (deletedBooks.deletedCount === 0) throw ApiError.BadRequest(`Books not found`)
        return deletedBooks
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
        // .exec(function (err, doc) {
        //     if(err) { res.status(500).json(err); return; };
        //     res.status(200).json(doc);
        // });
        if (!books.length) {
            res.status(500).json(err)
        }
        return {
            books,
            booksCount: booksCount.length
        }
    }

}

module.exports = new BookService()