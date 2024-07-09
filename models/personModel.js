const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	parents: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Person"
	}],
	children: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Person"
	}],
	age: Number,
	gender: {
		type: String,
		enum: ['Male', 'Female']
	},
	bloodGroup: {
		type: String,
		enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']
	},
	literate: Boolean,
	financialStrength: {
		type: String,
		enum:['destitute', 'poor','lower-middle-class','middle-class','upper-middle-class','wealthy']
	},
	hobbies: [String],
	isMarries: Boolean,
	spouse: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Person"
	},
	bornIn: String,
	currentLocation: String,
});

const personModel = mongoose.model("Person", PersonSchema);

module.exports = personModel;
