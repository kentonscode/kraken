var express = require('express');
var reports = express.Router();
var fs = require('fs');
var path = require('path'); 

reports.get('/reports', function(request, response) {
  fs.readdir("./reports", function (err, files) {
    if (err) throw err;
    console.log(files);
    response.send(files);
  });

});

module.exports = reports;