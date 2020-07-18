module.exports = (n) => {
  let fizzBuzz = '';
  for(let i = 1; i <= n; i++) {
    let toAdd = '';
    if(!(i % 3)) {
      toAdd += 'Fizz'
    }
    if(!(i % 5)) {
      toAdd += 'Buzz'
    }
    if(i % 3 && i % 5) {
      toAdd += `${i}`;
    }
    fizzBuzz += (toAdd + '\n');
  }
  return fizzBuzz;
};
