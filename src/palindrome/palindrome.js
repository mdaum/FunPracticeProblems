function reverseString (toReverse) {
  return toReverse.split('').reduce((prev, curr) => {
    return curr + prev;
  }, '');
}

module.exports = (input) => input == reverseString(input);
