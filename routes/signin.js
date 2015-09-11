var express = require('express'),
	router = express.Router();


router.post('/signin', function(req, res){

	var user = { 
		
		username :req.body.username,
		passwd : req.body.password,
	};

	console.log(user.passwd); 
	res.render('home');

})


module.exports = router;