"use strict";
exports.__esModule = true;
var sumOfPositiveNum = function (arr) {
    var positiveArr = arr.filter(function (item) { return item >= 0; });
    var sum = 0;
    for (var i = 0; i < positiveArr.length; i++) {
        sum += positiveArr[i];
    }
    return sum;
};
exports["default"] = sumOfPositiveNum;
