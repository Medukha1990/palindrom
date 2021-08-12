var person = 'anna';
function palindrome(str) {
    var reverseStr = str.split('').reverse().join('');
    if (reverseStr === str) {
        return true;
    }
    return false;
}
console.log(palindrome(person));
