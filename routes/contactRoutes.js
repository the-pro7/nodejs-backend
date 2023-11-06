const express = require("express");
const Contact = require("../models/contactModel");
const router = express.Router();

// @desc get all contacts
router.route("/").get(async (req, res) => {
    let contact = await Contact.find({})

    if (!contact) {
        throw new Error("Failed to retrieve contacts from DB")
    }
	res.status(200).json(contact);
});

// post contacts
router.route("/").post(async (req, res) => {
	const { name, email, phone } = req.body;

	if ((!name, !email, !phone)) {
		throw new Error("All fields are mandatory");
	}
	let contact = await Contact.create({
		name: name,
		email: email,
		phone: phone,
	});

	if (!contact) {
		throw new Error("Failed to add contact. Try again!");
	}
    console.log(contact)
	res.status(201).json(contact);
});

router
	.route("/:id")
	.get((req, res) => {
        const {id} = req.params.id
        let contact =  Contact.findById(id)

        if (!contact) {
            throw new Error(`No contact found with id ${req.params.id}`)
        }
		res
			.status(200)
			.json(contact);
	})
	.put((req, res) => {
		res
			.status(200)
			.json({ message: `Update contact with id ${req.params.id}` });
	})
	.delete((req, res) => {
		res
			.status(204)
			.json({ message: `Delete contact with id ${req.params.id}` });
	});

module.exports = router;
