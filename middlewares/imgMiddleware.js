const multer = require('multer');
const ApiError = require("../exceptions/apiError")
const path = require("path")
const fs = require("fs")
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try{
            if (fs.existsSync(path.join(__dirname, `../images/${file.originalname}`))) {
               return cb(ApiError.BadRequest(`A picture with the same name already exists`))
            }
            else{
                cb(null, 'images')
            }
        }catch(e){

        }
    },
    filename: (req, file, cb) => {
        cb(null,  file.originalname)
    }
});

const types = ["image/png", "image/jpeg", "image/jpg"]

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)){
        cb(null, true)
    }else {
        cb(null, false)
    }
}
 
module.exports = multer({ storage, fileFilter });
