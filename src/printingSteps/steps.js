function steps(n) {
  const result = [];
  for(let i = 1; i <= n; i++) {
    result.push(''.padStart(i, '#').padEnd(n, ' '));
  }
  return result;
}
module.exports = steps;
