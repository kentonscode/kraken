var express = require('express');
var userPageRoute = express.Router(); 
var path = require('path');

userPageRoute.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../user-page.html'));
});


module.exports = userPageRoute;
