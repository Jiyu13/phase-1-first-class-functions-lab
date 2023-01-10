// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(intNum) {
    return function(fare) {
        return intNum * fare;
    }
}

// const func
const fareDoubler = createFareMultiplier(2)