var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: Array
    }
});

module.exports = mongoose.model('image', ImageSchema);