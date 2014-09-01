var express = require('express');
var assert = require('chai').assert;
var supertest = require('supertest');

var blitz = require('..');

describe('blitzkrieg', function() {
  describe('without a key', function() {

    var app = express();

    app
      .use(blitz())
      .get('/foo', function(req, res, next) { res.send('ok'); });

    it('should not interfere with other routes', function(done) {
      supertest(app)
        .get('/foo')
        .expect('ok', done);
    });

  });

  describe('with a key', function() {

    var key = 'ab-c12abcd1-a1a12345-1a12ab12-12a12a12';
    var app = express();

    app
      .use(blitz(key))
      .get('/foo', function(req, res, next) { res.send('ok'); });

    it('should return 42 on the blitz route', function(done) {
      supertest(app)
        .get('/' + key)
        .expect('42', done);
    });

    it('should not interfere with other routes', function(done) {
      supertest(app)
        .get('/foo')
        .expect('ok', done);
    });
  });
});
