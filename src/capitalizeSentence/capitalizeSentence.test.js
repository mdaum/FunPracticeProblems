const capitalize = require('./capitalizeSentence');

test('works', () => {
  expect(capitalize('hello there world')).toEqual('Hello There World');
  expect(capitalize('what is up?')).toEqual('What Is Up?');
  expect(capitalize('?? how?')).toEqual('?? How?');
});
