const { Schema, model } = require("mongoose")

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },

    year: {
        type: String,
        required: true,
    },
    
    img: {
        type: String,
        required: true,
    },
    
    rating: {
        type: Array,
    },

    date: {
        type: Date,
        default: Date.now
    },

    downloadLink: {
        type: String,
        required: true,
    },

    owner: {
        type: String,
        required: true,
    }


})

module.exports = model("book", BookSchema)