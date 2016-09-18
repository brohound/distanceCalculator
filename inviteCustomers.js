var self = inviteCustomers;
module.exports = self;

var distanceCalculator = require('./distanceCalculator.js');
var degreesToRadiansConverter = require('./degreesToRadiansConverter.js');
var readFile = require('./readFile.js');
var validateJsonFile = require('./validateJsonFile.js');

var _ = require('underscore');

var maxDistanceFromOffice = 100;
var customersToInvite = [];

function inviteCustomers(filePath, callback) {
    //Bag is the object to which the functions readFile and validateJsonFile
    var bag = {};

    //read the input json file.
    readFile(filePath,
        function(err, fileContents) {
            if (err)
                bag.err = err;
            bag.fileContents = fileContents;
        }
    );
    if (bag.err)
       return callback(bag.err);

    //Validate input json format
    validateJsonFile(bag.fileContents,
        function(err, customers) {
            if (err)
                bag.err = err;
            bag.customers  = customers;
        }
    );
    if (bag.err)
        return callback(bag.err);

    //Compute customers to invite by calculating distance from the Intercom office
    customersToInvite = _.filter(bag.customers,
        function (customer) {
            var distanceFromOffice = distanceCalculator(degreesToRadiansConverter(customer.latitude),
                degreesToRadiansConverter(customer.longitude));
            return distanceFromOffice <= maxDistanceFromOffice
        }
    );

    customersToInvite = _.sortBy(customersToInvite, 'user_id');

    _.each( customersToInvite,
        function(customer) {
            console.log(customer.name + " " + customer.user_id);
        }
    );

    return callback();
}