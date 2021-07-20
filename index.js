//Import Modules
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv/config")

//Create App
const app = express()

app.use(bodyParser.json())
app.use(cors())

//Import Routes
const booksRoute = require("./routes/books")
const authRoute = require("./routes/auth")

//Middlewares
app.use("/books", booksRoute)
app.use("/auth", authRoute)

//Routes
app.get("/", (req, res) => {
    res.send("welcome to home")
})

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },

    () => console.log("connected to DB"))

//Start listening to the server
app.listen(process.env.PORT || 3001)
