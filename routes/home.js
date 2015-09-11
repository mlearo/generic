var express = require('express'),
	router = express.Router();



router.get('/', function(req, res){
	//console.log(router.handle.toString());
	//console.log(process.env);
	res.render('home');

})



module.exports = router;




