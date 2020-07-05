// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunks = []
//   let currentChunk = []
//   let currentChunkCount = 0
//   for (let current of array) {
//     if (currentChunkCount < size) {
//       currentChunk.push(current)
//       currentChunkCount += 1
//     } else {
//       chunks.push(currentChunk)
//       currentChunk = [current]
//       currentChunkCount = 1
//     }
//   }
//   chunks.push(currentChunk)
//   return chunks
// }

// function chunk(array, size) {
//   return array.reduce(
//     (chunked, currentInt) => {
//       const last = chunked[chunked.length - 1];
//       if (last.length < size) {
//         last.push(currentInt);
//       } else {
//         chunked.push([currentInt]);
//       }
//       return chunked;
//     },
//     [[]]
//   );
// }
