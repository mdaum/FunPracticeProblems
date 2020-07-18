module.exports = (str) => {
  const buckets = {};
  for(const char of str.split('')) {
    if(buckets[char] == undefined) {
      buckets[char] = 1;
    } else {
      buckets[char]++;
    }
  }
  let maxChar;
  for (const key in buckets) {
    if(maxChar == undefined) {
      maxChar = key;
      continue;
    }
    if(buckets[key] > buckets[maxChar]) {
      maxChar = key;
    }
  }
  return maxChar;
};
