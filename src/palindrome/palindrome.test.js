const isPalindrome = require('./palindrome');

test('abba', () => {
  expect(isPalindrome('abba')).toBeTruthy;
});

test('abcdefg', () => {
  expect(isPalindrome('abcdefg')).toBeFalsy;
});

