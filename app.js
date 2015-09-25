var express = require('express');
var app = express();
var loginRoute = require('./js/login-route.js');
var membershipRoute = require('./js/membership-route.js');
var reportsRoute = require('./js/reports.js');
var reportsListRoute = require('./js/reports-route.js');
var scannerRoute = require('./js/scanner.js');
var userPageRoute = require('./js/user-page-route.js');

app.use('/login', loginRoute);
app.use('/membership', membershipRoute);
app.use('/report', reportsRoute);
app.use('/reports-list', reportsListRoute);
app.use('/scan', scannerRoute);
app.use('/user-page', userPageRoute);

app.use('/', express.static('./'));
app.use('/img', express.static('img'));
app.use('/css', express.static('css'));
app.use(express.static('js'));

app.listen(1337);