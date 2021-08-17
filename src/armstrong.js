"use strict";
exports.__esModule = true;
var isNumArmstrong = function (num) {
    var arrFromNum = num.toString()
        .split('')
        .map(function (int) { return parseInt(int, arrFromNum); });
    return arrFromNum;
};
exports["default"] = isNumArmstrong;
