var request = require('supertest');
var should = require('should');
var express = require('express');
var reportsListRoute = require('./js/reports-route.js');

describe('Express Backend Route Tests', function() {
  var app = express();

  app.use('/reports-list', reportsListRoute);
  var agent = request.agent(app);

  it('status code 200', function(done) {
    agent
    .get('/reports-list')
    .expect(200)
    .end(done);
  });

});