const mongoose = require("mongoose");

async function connectDatabase() {
	try{
		await mongoose.connect(process.env.MONGODB_URL);
	} catch (err) {
		console.log(err);
	}
}

module.exports = connectDatabase;
