const steps = require('./steps');

for(let n = 1; n <= 10; n++) {
  test(`works for ${n}`, () => {
    const result = steps(n);
    console.log(result);
    expect(result).toHaveLength(n);
    for (let i = 1; i <= n; i++) {
      expect(result[i-1].length === n).toBeTruthy;
      expect(result[i-1] === ''.padStart(i, '#').padEnd(n,' '));
    }
  });
}
