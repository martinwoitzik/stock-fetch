var express = require('express');
var router = express.Router();
var fetchQuandl = require('../fetch-quandl.js');

router.get('/', function(req, res, next) {

  fetchQuandl.searchTest().then(function(response) {
    res.render('quandl', {
      output: response
    });
  });

});

module.exports = router;
