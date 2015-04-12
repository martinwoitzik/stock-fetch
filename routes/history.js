var express = require('express');
var router = express.Router();
var fetchYFinance = require('../private/fetch-yahoofinance.js');

router.get('/', function(req, res, next) {

  fetchYFinance.historical(req.query.wkn.toUpperCase())
    .then(function (stockData) {
      res.render('history', {
        wkn: req.query.wkn,
        stockData: stockData
      });
    });

});

module.exports = router;
