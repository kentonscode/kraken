var express = require('express');
var app = express();
var loginRoute = require('./server/login-route.js');
var membershipRoute = require('./server/membership-route.js');
var reportsRoute = require('./server/reports.js');
var reportsListRoute = require('./server/reports-route.js');
var scannerRoute = require('./js/scanner.js');
var userPageRoute = require('./server/user-page-route.js');

app.use('/login', loginRoute);
app.use('/membership', membershipRoute);
app.use('/report', reportsRoute);
app.use('/reports-list', reportsListRoute);
app.use('/scan', scannerRoute);
app.use('/user-page', userPageRoute);

app.use('/', express.static('./public/dist/html'));
app.use('/img', express.static('public/dist/img'));
app.use('/css', express.static('public/dist/css'));
app.use('/js', express.static('public/dist/js'));

app.listen(1337);