var simplecrawler = require('simplecrawler');

var crawler = {
  test: function() {

    simplecrawler.maxDepth = 1;
    simplecrawler.crawl("http://www.apple.com", function(queueItem, data, data2) {
      console.log('Completed fetching url', queueItem, data, data2);
    });

  }
};

module.exports = crawler;