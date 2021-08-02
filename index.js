require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const router = require("./router/index")
const errorMiddleware = require("./middlewares/errorMiddleware")
const path = require("path")
const PORT = process.env.PORT || 5000
const app = express()


//MIDDLEWARES
app.use(express.json({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use("/api", router)
app.use(errorMiddleware)
app.use("/images", express.static(path.join(__dirname, "images")))

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()