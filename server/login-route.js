var express = require('express');
var loginRoute = express.Router(); 
var path = require('path');

loginRoute.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../public/dist/html/login.html'));
});


module.exports = loginRoute;
