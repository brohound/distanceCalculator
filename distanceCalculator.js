var self = distanceCalculator;
module.exports = self;

var degreesToRadiansConverter = require('./degreesToRadiansConverter.js');

var dublinOfficeLatitude = degreesToRadiansConverter(53.3381985);
var dublinOfficeLongitude = degreesToRadiansConverter(-6.2592576);
var radiusOfEarth = 6371;

function distanceCalculator(customerLatitude, customerLongitude) {
    var deltaLongitude = Math.abs(customerLongitude - dublinOfficeLongitude);

    //Calculate central angle
    var centralAngle = Math.acos((Math.sin(dublinOfficeLatitude) * Math.sin(customerLatitude)) +
        (Math.cos(dublinOfficeLatitude) * Math.cos(customerLatitude) * Math.cos(deltaLongitude)));

    return centralAngle * radiusOfEarth;
}