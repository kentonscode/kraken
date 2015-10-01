var express = require('express');
var reportsListRoute = express.Router(); 
var path = require('path');

reportsListRoute.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/../public/dist/html/reports-list.html'));
});


module.exports = reportsListRoute;
