// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  const numberOfColumns = 2 * n - 1;
  if (row === n) {
    return;
  }
  if (level.length === numberOfColumns) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor(numberOfColumns / 2);
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }
  return pyramid(n, row, level);
}

module.exports = pyramid;
