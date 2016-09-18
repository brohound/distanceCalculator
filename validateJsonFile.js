var self = validateJsonFile;
module.exports = self;
var _ = require('underscore');

function validateJsonFile(fileContents, callback) {
    var customersArray = fileContents.split('\n');
    try {
        customersArray = _.map(customersArray,
            function (customer) {
                var missingFields = getMissingFields(JSON.parse(customer));
                if (!_.isEmpty(missingFields))
                    throw {err: 'One or more fields are missing or empty', missingFields: missingFields};
                return JSON.parse(customer);
            }
        );
    }
    catch (error) {
        if (error)
            return callback(error);
    }
    return callback(null, customersArray);
}

function getMissingFields(customer) {
    var missingFields = [];
    if (!_.has(customer, 'latitude'))
        missingFields.push('latitude');
    if (!_.has(customer, 'longitude'))
        missingFields.push('longitude');
    if (!_.has(customer, 'user_id'))
        missingFields.push('user_id');
    if (!_.has(customer, 'name'))
        missingFields.push('name');
    return missingFields;
}
