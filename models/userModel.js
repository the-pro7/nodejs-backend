const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: [true, "Please provide an email"],
			unique: [true, "Email already taken, try again!"],
		},
		password: {
			type: String,
			required: [true, "Passwords must be contain 8 or more letters"],
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
