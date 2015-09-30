var express = require('express'),
	router = express.Router(),
	bcrypt = require('bcrypt-nodejs'),
	crypto = require('crypto');


router.post('/signin', function(req, res){

	//create user object from data sent to server
	var user = { 
		
		username :req.body.username,
		passwd : req.body.password,
		cookie : req.headers.cookie,
	};

	//hash user password
	var pass_hash = bcrypt.hashSync(user.passwd);

	//check if provided password is correct
	var isEqual = bcrypt.compareSync("taco",pass_hash);
	var cook = Date.now() + 1000 * 60;

	//set cookie
	res.cookie("testCookie",cook, { expires: new Date(Date.now() + 1000 * 60), httpOnly: true });
	console.log(isEqual);
	res.render('home');

})


module.exports = router;