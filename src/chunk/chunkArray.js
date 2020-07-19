// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


module.exports = (arr, size) => {
  const chunks = [];
  if(!size) {
    return chunks;
  }
  arr = arr.reverse(); //reverse so we maintain order when we pop.
  let currentChunk = [];
  while(arr.length) {
    currentChunk.push(arr.pop());
    if(currentChunk.length === size) {
      chunks.push(currentChunk);
      currentChunk = [];
    }
  }
  if(currentChunk.length) {
    chunks.push(currentChunk);
  }
  return chunks;
};
