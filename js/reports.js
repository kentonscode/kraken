var express = require('express');
var reports = express.Router();
var path = require('path'); 

reports.get('/reports', function(req, res) {
  res.sendFile(path.join(__dirname, '/../', '89861: www.lemonandolives.com - report.txt'));
});


module.exports = reports;