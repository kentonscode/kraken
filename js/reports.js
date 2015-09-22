var express = require('express');
var reports = express.Router();
var fs = require('fs');

reports.get('/list', function(request, response) {
  fs.readdir(__dirname + "/../reports", function (err, files) {
    if (err) throw err;
    response.send(files);
  });

});

module.exports = reports;