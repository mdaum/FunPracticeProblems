const reverseInt = require('./reverseInt');

test('works', () => {
  const inputs = [15,981,500,-15,-90];
  const outputs = [51,189,5,-51,-9];
  for (let i =0; i< inputs.length; i++) {
    expect(reverseInt(inputs[i])).toBe(outputs[i]);
  }
});
