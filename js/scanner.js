var express = require('express');
var urlScan = express.Router(); 
var fs = require('fs');

urlScan.get('/:url', function(request, response, next) {
  var scan = require('child_process').spawn;
  var myScan = scan('ruby', ['wpscan.rb', '--url', request.params.url],
   {cwd: '/Users/Kentonkotsiris/wpscan/'}
   );

  console.log('I got this far 1')

  var fileSystem = Math.floor(Math.random()*90000) + 10000;
  var dateScan = new Date().toDateString();

  console.log('I got this far 2 ')

  myScan.stdout.on('data', function(data)  {

    console.log('I got this far 3')
    // var currentDirectory = process.cwd();
    // if (currentDirectory.search('reports') == -1) {
    //     process.chdir('./reports'); //stores result in reports folder
    //   }

    fs.appendFile(dateScan + ': ' + fileSystem + ': ' + request.params.url + ' - report.txt', data , function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  });
  response.send();
});


module.exports = urlScan;