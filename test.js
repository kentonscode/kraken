var request = require('supertest');
var should = require('should');
var agent =  require('supertest')('http://localhost:1337')

describe('Express Backend Route Tests', function() {

  it('status code 200', function(done) {
    agent
    .get('/reports-list')
    .expect(200)
    .end(done);
  });

  it('status code 200', function(done) {
    agent
    .get('/report/list')
    .expect(200)
    .end(done);
  });
});