var express = require('express');
var reports = express.Router();
var fs = require('fs');

reports.get('/list', function(request, response) {
  fs.readdir(__dirname + "/../reports", function (err, files) {
    if (err) throw err;
    response.send(files);
  });

});

//path to show single report

reports.get('/print/:id', function(request, response){
 var id = request.params.id;
 var REPORT_PATH = __dirname + '/../reports/'
 
 fs.readdir(REPORT_PATH, function(err, files) {
   for (var i = 0; i < files.length; i++) {
     if (files[i].indexOf(id) > -1) {
       var report = fs.readFileSync(REPORT_PATH + files[i], 'utf8');
       response.send(report);
     }
   }
 });
});

 module.exports = reports;