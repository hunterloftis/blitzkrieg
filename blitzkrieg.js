var express = require('express');
var path = require('path');

module.exports = function blitzkrieg(blitz_key) {
  var router = new express.Router();

  if (blitz_key && blitz_key.length === 38) {
    router.get('/' + blitz_key, function blitz(req, res, next) {
      res.send('42');
    });
  }

  return router;
};
