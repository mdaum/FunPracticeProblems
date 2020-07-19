const chunkArray = require('./chunkArray');

test('works on evenly chunked array', () => {
  expect(chunkArray([1,2,3,4],2)).toStrictEqual([[1,2],[3,4]]);
});

test('works on unevenly chunked array', () => {
  expect(chunkArray([1,2,3,4,5],2)).toStrictEqual([[1,2],[3,4],[5]]);
});

test('3 chunks of 3 uneven', () => {
  expect(chunkArray([1,2,3,4,5,6,7,8],3)).toStrictEqual([[1,2,3],[4,5,6],[7,8]]);
});

test('chunk of size 4', () => {
  expect(chunkArray([1,2,3,4,5],4)).toStrictEqual([[1,2,3,4],[5]]);
});

test('chunk size bigger than input array length', () => {
  expect(chunkArray([1,2,3,4,5],10)).toStrictEqual([[1,2,3,4,5]]);
});

test('chunk size one', () => {
  const input = [1,2,3,4,5];
  expect(chunkArray(input,1)).toEqual([[1],[2],[3],[4],[5]]);
});
