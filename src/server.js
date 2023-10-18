const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 5000

// app.use("/api/contacts", require("../controllers/contactController"))
app.get("/api/contacts", (req, res) => {
    res.status(200).send("Get all contacts")
})

// Post to source
app.post("/api/contacts", (req, res) => {
    res.status(201).send("Post contacts")
})

// Get a single contact
app.get("/api/contacts/:id", (req, res) => {
    res.status(201).send(`Get contact ${req.params.id}`)
})

// Update a single contact
app.put("/api/contacts/:id", (req, res) => {
    res.status(201).send(`Add new contact ${req.params.id}`)
})

// Delete a single contact
app.delete("/api/contacts/:id", (req, res) => {
    res.status(200).send(`Delete contact ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`App running on ${port}`)
})

