var yahooFinance = require('yahoo-finance');
var _ = require('lodash');


var fetch = {

    historical: function(symbol) {
        yahooFinance.historical({
            symbol: symbol ? symbol : 'AAPL',
            from: '2012-01-01',
            to: '2012-12-31'
            // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        }, function (err, quotes) {
           console.log(err, quotes);
        });
    },

    snapshot: function(symbol) {
        yahooFinance.snapshot({
            symbol: symbol ? symbol : 'AAPL',
            fields: ['s', 'n', 'd1', 'l1', 'y', 'r']
        }, function (err, snapshot) {
            console.log(err, snapshot);
        });
    }
};

module.exports = fetch;