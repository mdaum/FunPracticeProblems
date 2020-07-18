const maxChar = require('./maxChar');

test('works', () => {
  expect(maxChar('abccccccd')).toBe('c');
  expect(maxChar('apple 1231111')).toBe('1');
});
