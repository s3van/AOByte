const ImageModel = require("../models/imgModel")

class ImageService {

    postImage(obj) {
        console.log(obj)
        // const bookImage = await ImageModel.create(obj)
        // return bookImage
    }
}
module.exports = new ImageService()