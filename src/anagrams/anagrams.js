function isAnagram(stringA, stringB) {
  const lowercaseRegex = /[^a-z]/g;
  const a = stringA.toLowerCase().replace(lowercaseRegex, '').split('').sort().join('');
  const b = stringB.toLowerCase().replace(lowercaseRegex, '').split('').sort().join('');
  return a === b;
}

module.exports = isAnagram;
