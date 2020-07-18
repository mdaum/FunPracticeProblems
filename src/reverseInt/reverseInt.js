function reverseIntString(toReverse) {
  const reversedString = toReverse.split('').reduce((prev,curr) => {
    return curr + prev;
  }, '');
  return Number.parseInt(reversedString);
}

module.exports = (integer) => {
  const stringInt = integer.toString();
  return (stringInt.charAt(0) == '-') ? -1 * reverseIntString(stringInt.slice(1)) : reverseIntString(stringInt);
};
