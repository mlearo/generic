var express = require('express'),
	mongoose = require('mongoose');
	//passport = require('passport'),
	//userSchema = mongoose.model("userSchema"),
	//addressSchema = mongoose.model("addressSchema");

var Schema = mongoose.Schema;

var userSchema = new Schema({

	username: {type: String, requiered: true, unique: true},
	passwd: {type: String, requiered: true, unique: true},
	//status: "Active",
	//groups: [],
	//comments: [commentID1, commentID2, commentID3],
  	resetPasswordToken: String,
  	resetPasswordExpires: Date
})

mongoose.model('userSchema', userSchema);