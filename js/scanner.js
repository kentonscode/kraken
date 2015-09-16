var express = require('express');
var urlScan = express.Router(); 


urlScan.get('/scan', function(request, response, next) {
  var spawn = require('child_process').spawn;
  spawn('ruby', ['wpscan.rb', '--url', 'http://www.lemonandolives.com/'],
   {cwd: '/Users/Kentonkotsiris/wpscan/'}
   );
  response.send()
});

module.exports = urlScan;