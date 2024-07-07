// Code your solution in this file!
// Function to return the first two drivers
function returnFirstTwoDrivers (drivers){
    return drivers.slice (0,2);
};
const drivers=(['Antonia','Nuru','Amari','Mo']);
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log (firstTwoDrivers);

// Function to return the last two drivers
function returnLastTwoDrivers (drivers){
    return drivers.slice (-2);
};
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log (lastTwoDrivers);

// Array containing both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log (selectingDrivers);

//create FareMultiplier
function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    };
};

// fareDoubler
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

console.log(fareDoubler(10));
console.log(fareTripler(10));

//selectDifferentDrivers(arrayOfDrivers, function)
const selectDifferentDrivers = function(arrayOfDrivers,selectingFunction){
    return selectingFunction(arrayOfDrivers);
};