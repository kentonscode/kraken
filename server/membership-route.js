var express = require('express');
var membershipRoute = express.Router(); 
var path = require('path');

membershipRoute.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../public/dist/html/membership.html'));
});


module.exports = membershipRoute;
