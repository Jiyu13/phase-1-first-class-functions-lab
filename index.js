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

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, returnFirstTwoDrivers) {
    return  returnFirstTwoDrivers(arr);
}