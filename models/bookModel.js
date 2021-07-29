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

    img: {
        type: String,
        required: true,
    },
    
    raiting: {
        type: Array,
    },

    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = model("book", BookSchema)