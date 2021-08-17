"use strict";
exports.__esModule = true;
var palindrome = function (str) {
    var reverseStr = str.split('')
        .reverse()
        .join('');
    return reverseStr === str;
};
exports["default"] = palindrome;
