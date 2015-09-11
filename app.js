require('./mongo/userSchema');

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');





// declare and instantiate routes
var home = require('./routes/home');
var signUp = require('./routes/signup');
var signin = require('./routes/signin');

// delcare and set app variable equal to express function
var app = express();




//set view engine and view path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// use middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', home);
app.get('/signUp', signUp);
app.post('/signUp', signUp);
app.post('/signin', signin);


app.get('/test', function(req, res){

	res.render('test');
})

app.use(function(request,response){
	console.log("no path for this");
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("404 not found");
	response.end();

})



module.exports = app;