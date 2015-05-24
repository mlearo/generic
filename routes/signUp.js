var express = require('express'),
	router = express.Router();



router.get('/signUp', function(req, res){
	console.log('received');
	//res.render('signUpPage');
})


router.post('/signUp', function(req, res){
	console.log('post signup received');
	

})


module.exports = router;