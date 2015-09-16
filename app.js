var express = require('express');
var app = express();
var scannerRoute = require('./js/scanner.js');


//scan route 
app.use('/', scannerRoute);


//don't forget this - it starts node server 
app.listen(1337);