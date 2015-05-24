var express = require('express'),
	app = require('./app');

require('./mongo/connect');



var server = app.listen(3000, function(){
	console.log('listening....');	
})

/* pull stack to review
----------------------------*/
//console.log('stack', app._router.stack);


module.exports = server; 