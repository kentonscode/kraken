var express = require('express');
var urlScan = express.Router(); 
var fs = require('fs');

urlScan.get('/:url', function(request, response, next) {
  var scan = require('child_process').spawn;
  var myScan = scan('ruby', ['wpscan.rb', '--batch', '--no-color', '--no-banner', '--url', request.params.url],
   {cwd: '/Users/Kentonkotsiris/wpscan/'}
   );

  var fileSystem = Math.floor(Math.random()*90000) + 10000;
  var dateScan = new Date().toDateString();

  myScan.stdout.on('data', function(data)  {
    var currentDirectory = process.cwd();
    if (currentDirectory.search('reports') == -1) {
        process.chdir('./reports'); //stores result in reports folder
      }
      fs.appendFile(dateScan + ': ' + fileSystem + ': ' + request.params.url + ' - report.txt', data , function (err) {
        if (err) throw err;
        console.log('new report scan file created!');
      });
    });
  response.send();
});


module.exports = urlScan;