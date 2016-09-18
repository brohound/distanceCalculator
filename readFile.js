var self = readFile;
module.exports = self;

var fs = require('fs');

function readFile(filePath, callback) {
    try {
        var fileContents = fs.readFileSync(filePath, 'utf8');
    }
    catch (err) {
        if (err)
            return callback(err);
    }
    return callback(null, fileContents);
}