var express = require('express');
var router = express.Router();
var fetchYFinance = require('../fetch-yahoofinance.js');

router.get('/', function(req, res, next) {

  fetchYFinance.historical(req.query.wkn.toUpperCase(), req.query.date_from, req.query.date_to)
    .then(function (stockData) {
      res.render('history', {
        wkn: req.query.wkn,
        stockData: stockData
      });
    });

});

module.exports = router;
