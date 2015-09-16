var spawn = require('child_process').spawn;

var scan = spawn('ruby', ['wpscan.rb', '--url', 'http://www.example.com/'],
 {cwd: '/Users/Kentonkotsiris/wpscan/'}
 );

scan.stdout.on('data', function(data) {
  console.log('The Kraken Is Released! ' + data);
});

scan.on('exit', function (exitCode){
  console.log('Kraken Scan Complete: ' + exitCode);
}); 