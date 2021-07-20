const {Schema, model} = require("mongoose")

const BookSchema = new Schema ({
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
  
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = model("Book", BookSchema)