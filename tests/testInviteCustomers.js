var inviteCustomers = require('./../inviteCustomers.js');

//Testing for a invalidJson format
var path = './data/invalidJson1.json';
inviteCustomers(path,
    function(err) {
        if (err)
            console.log('Test case failed due to', err);
        else
            console.log('Test passed successfully');
    }
);

//Testing for a case where customers don't have all the necessary fields
var path = './data/missingFields.json';
inviteCustomers(path,
    function(err) {
        if (err)
            console.log('Test case failed due to', err);
        else
            console.log('Test case passed successfully');
    }
);

//Testing for a happy case
var path = './data/customers.json';
inviteCustomers(path,
    function(err) {
        if (err)
            console.log('Test case failed due to', err);
        else
            console.log('Test case passed successfully');
    }
);