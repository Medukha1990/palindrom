import palindrome from './src/palindrome';
import fizzBuzz from './src/fizzBuzz';
import isNumArmstrong from './src/armstrong';
import sumOfPositiveNum from './src/positive_numbers';
import { fibonacci, printFibonacci } from './src/fibonacci';

const arrayOfNum: number[] = [0, 1, 3, -5, -4, 2, -7];

console.log(palindrome('Some string'));
fizzBuzz(100);
console.log(isNumArmstrong(153));
console.log(sumOfPositiveNum(arrayOfNum));
console.log(printFibonacci(10));
console.log(fibonacci(5));
