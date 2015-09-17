var express = require('express');
var app = express();
var scannerRoute = require('./js/scanner.js');


//middleware for scan 
app.use('/', scannerRoute);

//middleware for images
app.use('/img', express.static('img'));

//middleware for JS
app.use(express.static('js'));

//middleware for CSS
app.use('/css', express.static('css'));

//middleware for index
app.use('/', express.static('./'));

//middleware for scan
app.get('/scan/:url', function(req, res) {
  res.send(req.params.url);
});



//express will listen on this port
app.listen(1337);