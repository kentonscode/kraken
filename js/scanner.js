var express = require('express');
var urlScan = express.Router(); 
var fs = require('fs');

urlScan.get('/scan/:url', function(request, response, next) {
  var scan = require('child_process').spawn;
  var myScan = scan('ruby', ['wpscan.rb', '--url', request.params.url],
   {cwd: '/Users/Kentonkotsiris/wpscan/'}
   );

  var fileSystem = Math.floor(Math.random()*90000) + 10000;

  myScan.stdout.on('data', function(data) {
    fs.appendFile(fileSystem + '-' + request.params.url + ' - report.txt', data , function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  });

  response.send();
});


module.exports = urlScan;