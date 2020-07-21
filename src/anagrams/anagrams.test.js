const isAnagram = require('./anagrams');

test('works on anagram', () => {
  expect(isAnagram('rail safety', 'fairy tales')).toBeTruthy;
  expect(isAnagram('RAIL! SAFETY!', 'fairy tales')).toBeTruthy0;
});

test('doesn\'t work on non-anagrams', () => {
  expect(isAnagram('Hi there!', 'Bye there')).toBeFalsy;
});
