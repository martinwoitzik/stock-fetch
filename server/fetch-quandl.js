var Quandl = require("quandl");
var Promise = require('promise');
var envs = require('envs');

var quandlService = new Quandl({
  auth_token: envs('QUANDL_AUTH_TOKEN'),
  api_version: 1
});

var fetch_quandl = {

  searchTest: function() {
    return new Promise(function(resolve, reject) {
      quandlService.search("crude oil", { format: "xml" }, function(err, response){
        if (err) {
          reject(err);
        }

        resolve(response);
      });
    });
  }

};

module.exports = fetch_quandl;