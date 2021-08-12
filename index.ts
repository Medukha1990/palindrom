const person: string = 'anna';

function palindrome(str: string) {
  const reverseStr = str.split('').reverse().join('');
  if (reverseStr === str) {
    return true;
  }
  return false;
}

palindrome(person);

