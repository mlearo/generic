var express = require('express'),
	router = express.Router();


router.post('/signin', function(req, res){

	console.log('received signin');
	res.render('home');

})


module.exports = router;