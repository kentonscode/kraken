var express = require('express');
var reports = express.Router();
var fs = require('fs');
var path = require('path'); 

reports.get('/list', function(request, response) {
  fs.readdir(__dirname + "/../reports", function (err, files) {
    if (err) throw err;
    console.log(files);
    response.send(files);
  });

});

module.exports = reports;