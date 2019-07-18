var fs = require('fs');
var path = require("path");
var calculateDistance = require('./distance_calculate');
var customerData = fs.readFileSync(path.resolve(__dirname, "./Customers _Assignment_Coding.txt"), 'utf8');
var dublinLocation = { lat: 53.339428, long: -6.257664 };
var maxDistance = 100;
GetGuestList = () => {
    let filteredGuestList = []
    for (let customer of customerData.split('\n')) {
        customer = JSON.parse(customer)
        let location = { lat: customer.latitude, long: customer.longitude }

        customer.distanceFromDublin = calculateDistance(dublinLocation, location)
        filteredGuestList.push(customer)
    }

    filteredGuestList = filteredGuestList.filter(function (number) {
        return number.distanceFromDublin <= maxDistance;
    });
    let guestList = filteredGuestList.map((data) => {
        return { name: data.name, ID: data.user_id }
    });

    guestList.sort((a, b) => {
        return a.ID - b.ID;
    });
    return guestList
}
module.exports = GetGuestList;

let guestData = GetGuestList();
console.log(guestData);