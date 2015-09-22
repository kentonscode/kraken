var express = require('express');
var app = express();
var scannerRoute = require('./js/scanner.js');
var reportsRoute = require('./js/reports.js');


//middleware for scan 
app.use('/scan', scannerRoute);

//middleware for /report
app.use('/report', reportsRoute);

//middleware for images
app.use('/img', express.static('img'));

//middleware for JS
app.use(express.static('js'));

//middleware for CSS
app.use('/css', express.static('css'));

//middleware for index
app.use('/', express.static('./'));

//express will listen on this port
app.listen(1337);