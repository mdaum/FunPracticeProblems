const fizzBuzz = require('./fizzBuzz');

const longFizzBuzz = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz Fizz'.split(' ');
test('works', () => {
  for(let i=1; i <= longFizzBuzz.length; i++) {
    const expected = longFizzBuzz.slice(0,i).join('\n');
    expect(fizzBuzz(i).trim()).toBe(expected);
  }
});
