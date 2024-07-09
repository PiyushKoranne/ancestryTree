const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const server = express();
const cors = require("cors");
const connectDatabase =  require('./config/connectDatabase');
const chalk = require('chalk');

// import database models:
const personModel = require("./models/personModel");

// connect to database:

connectDatabase();

// middlewares:

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.use(cors());


// routes:

server.get("/", async (req, res)=>{
	res.status(200).json({success: true, msg:"Server is running"});
})

server.post("/add-person", async (req, res) => {
	console.log("Adding a new person");
	const newPerson = new personModel({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		age: parseInt(req.body.age),
		gender: req.body.gender,
		bloodGroup: req.body.bloodGroup,
		literate: req.body.isLiterate,
		financialStrength: req.body.financialStrength,
		hobbies: req.body.hobbies,
		isMarried: req.body.isMarried,
		bornIn: req.body.birthLocation,
		currentLocation: req.body.currentLocation,
	});
	await newPerson.save();
	return res.status(200).json({success: true, msg:"Person Added"})

})

// listen for connections:

mongoose.connection.once('connected', ()=>{
	console.log(chalk.bgBlackBright.greenBright.bold("  Database Connected  "));
	server.listen(4000, "0.0.0.0", ()=>{
		console.log('Server is ready');
	})
})
