const reverseString = require('./reverseString');
test('apple', () => {
  expect(reverseString('apple')).toEqual('elppa');
});
test('hello', () => {
  expect(reverseString('hello')).toEqual('olleh');
});
test('Greetings!', () => {
  expect(reverseString('Greetings!')).toEqual('!sgniteerG');
});

