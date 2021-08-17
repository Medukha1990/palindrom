"use strict";
exports.__esModule = true;
var fizzBuzz = function (num) {
    for (var i = 1; i < num; i++) {
        var str = (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz');
        console.log(str === '' ? i : str);
    }
};
exports["default"] = fizzBuzz;
