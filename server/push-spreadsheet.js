var spreadsheet = require('edit-google-spreadsheet');

var push = {

    load: function(username, password) {

        spreadsheet.load({
            debug: true,
            spreadsheetName: 'test-sheet',
            worksheetName: 'Sheet1',
            username: username,
            password: password
        }, function sheetReady(err, spreadsheet) {
            console.log('sheet ready!', err, spreadsheet);
        });
    }
};

module.exports = push;