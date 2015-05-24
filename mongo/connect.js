var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Mongo is connected');
});

module.exports = db;