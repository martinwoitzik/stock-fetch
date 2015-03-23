var express = require('express');
var router = express.Router();
var fetchYFinance = require('../private/fetch-yahoofinance.js');

router.get('/', function(req, res, next) {

  fetchYFinance.snapshot(req.query.wkn.toUpperCase())
    .then(function (stockData) {
      res.render('snapshot', {
        wkn: req.query.wkn,
        stockData: stockData
      });
    });

});

module.exports = router;
