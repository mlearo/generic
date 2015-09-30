var express = require('express'),
	mongoose = require('mongoose');
	//passport = require('passport'),
	//userSchema = mongoose.model("userSchema"),
	//addressSchema = mongoose.model("addressSchema");

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({

	username: {type: String, requiered: true, unique: true},
	email: {type: String, required: true, unique: true},
	passwd: {type: String, requiered: true, unique: true},
	resetPasswordToken: String,
  	resetPasswordExpires: Date,
  	created_date: Date,
  	updated_date: Date
})

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;


//mongoose.model('userSchema', userSchema);