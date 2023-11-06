const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type:  String,
        required: [true, "Type a contact name"]
    },
    email: {
        type: String,
        required: [true, "Type an email please!!"]
    },
    phone: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact