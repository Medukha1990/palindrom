"use strict";
exports.__esModule = true;
exports.fibonacci = exports.printFibonacci = void 0;
var printFibonacci = function (num) {
    var result = [0, 1];
    for (var i = 2; i < num; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result.slice(0, num);
};
exports.printFibonacci = printFibonacci;
var fibonacci = function (num) {
    if (num < 2) {
        return num;
    }
    return exports.fibonacci(num - 1) + exports.fibonacci(num - 2);
};
exports.fibonacci = fibonacci;
