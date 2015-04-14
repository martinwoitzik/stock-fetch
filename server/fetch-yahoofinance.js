var yahooFinance = require('yahoo-finance');
var _ = require('lodash');

var stockFields = {
    pricing: ['a', 'b', 'b2', 'b3', 'p', 'o'],
    dividends: ['y', 'd', 'r1', 'q'],
    date: ['c1', 'c', 'c6', 'k2', 'p2', 'd1', 'd2', 't1'],
    averages: ['c8', 'c3', 'g', 'h', 'k1', 'l', 'l1', 't8', 'm5', 'm6', 'm7', 'm8', 'm3', 'm4'],
    fiftyTwoWeeksPricing: ['k', 'j', 'j5', 'k4', 'j6', 'k5', 'w'],
    systemInfo:['i', 'j1', 'j3', 'f6', 'n', 'n4', 's1', 'x', 'j2'],
    volume: ['v', 'a5', 'b6', 'k3', 'a2'],
    ratio: ['e', 'e7', 'e8', 'e9', 'b4', 'j4', 'p5', 'p6', 'r', 'r2', 'r5', 'r6', 'r7', 's7'],
    misc1: ['w1', 'w4', 'p1', 'm', 'm2', 'g1', 'g3', 'g4', 'g5', 'g6'],
    misc2: ['t7', 't6', 'i5', 'l2', 'l3', 'v1', 'v7', 's6', 'e1']
};

var fetch = {

    historical: function(symbol, dateFrom, dateTo) {
        return yahooFinance.historical({
            symbol: symbol ? symbol : 'AAPL',
            from: dateFrom,
            to: dateTo
            // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        }, function (err, quotes) {
            (err) ? console.err(err) : console.log(quotes);
        });
    },

    snapshot: function(symbol) {
        var fieldsToFetch = ['pricing', 'dividends', 'date', 'averages', 'fiftyTwoWeeksPricing', 'systemInfo'].map(function(item) {
            return stockFields[item];
        }).reduce(function(a, b) {
            return a.concat(b);
        });

        return yahooFinance.snapshot({
            symbol: symbol ? symbol : 'AAPL',
            fields: fieldsToFetch
        }, function (err, snapshot) {
            //(err) ? console.err(err) : console.log(snapshot);
            if (err)
              console.error(err);
        });
    }
};

module.exports = fetch;