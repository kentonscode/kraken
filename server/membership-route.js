var express = require('express');
var membershipRoute = express.Router(); 
var path = require('path');

membershipRoute.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../public/dist/membership.html'));
});


module.exports = membershipRoute;
