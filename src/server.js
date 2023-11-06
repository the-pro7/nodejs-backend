const express = require("express")
const erroHandler = require("../middleware/errorHandler")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")

// Initialize intance of express server
const app = express()

// Midleware for express app
app.use(erroHandler)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Port for requests
const port = process.env.PORT || 5000

app.use("/api/contacts", require("../routes/contactRoutes"))

mongoose.connect(process.env.CONNECTION_STRING).then(()=> {
    console.log("connected")
    app.listen(port, () => {
        console.log(`App running on ${port}`)
    })
}).catch(err => console.log(err.stack))


