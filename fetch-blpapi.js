var blpapi = require('blpapi');

var service_id = 1;
var securities = [
    { security: 'AAPL US Equity', correlation: 0, fields: ['LAST_TRADE'] },
    { security: 'GOOG US Equity', correlation: 1, fields: ['LAST_TRADE'] }
];


var init = function() {

    var session = new blpapi.Session({host: '127.0.0.1', port: 8194});
    session.on('SessionStarted', function(m) {
        session.openService('//blp/mktdata', service_id);
    });

    session.on('ServiceOpened', function(m) {
        if (m.correlations[0].value == service_id) {
            session.subscribe(securities);
        }
    });

    session.on('MarketDataEvents', function(m) {
        if (m.data.hasOwnProperty('LAST_TRADE')) {
            console.log(securities[m.correlations[0].value].security, 'LAST_TRADE', m.data.LAST_TRADE);
        }
    });

    session.start();
}

module.exports = init;