var express = require('express'),
	router = express.Router();



router.get('/signUp', function(req, res){
	console.log('received');
	//res.render('signUpPage');
})


router.post('/signUp', function(req, res){
	var newUser = { 
		firstName : req.body.firstName,
		lastName : req.body.lastName,
		email : req.body.email,
		passwd : req.body.passwd,
		passwdConfirm : req.body.passwdConfirm,
	}


	//bcrypt.hash(newUser.passwd, null, null, function(err, hash) {
    // Store hash in your password DB.
	//});


	console.log('post signup received');
	console.log(obj);
	res.send();
	

})


module.exports = router;