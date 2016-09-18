var readFile = require('./../readFile.js');

console.log('Testing for a case where file path is incorrect.');
var path = './data/abcd.json';
readFile(path,
    function(err) {
        if (err)
            console.log('Test case failed due to', err);
        else
            console.log('Test case passed successfully');
    }
);

console.log('\nTesting for a happy case');
var path = './data/customers.json';
readFile(path,
    function(err) {
        if (err)
            console.log('Test case failed due to', err);
        else
            console.log('Test case passed successfully');
    }
);