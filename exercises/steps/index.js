// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, numberOfSpaces = 0) {
  const stepChar = "#";
  const spaceChar = " ";
  if (n === 0) {
    return;
  }
  steps(n - 1, numberOfSpaces + 1);
  console.log(stepChar.repeat(n) + spaceChar.repeat(numberOfSpaces));
}

module.exports = steps;

// function steps(n) {
//   const stepChar = "#";
//   const spaceChar = " ";
//   for (let i = 0; i < n; i++) {
//     console.log(`${stepChar.repeat(i + 1)}${spaceChar.repeat(n - i - 1)}`);
//   }
// }
