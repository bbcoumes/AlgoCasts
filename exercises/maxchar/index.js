// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCountMap = {};
  let currMax = 0;
  let currMaxChar = "";
  for (let char of str) {
    charCountMap[char] = charCountMap[char] ? charCountMap[char] + 1 : 1;
    const count = charCountMap[char];
    if (count > currMax) {
      currMax = count;
      currMaxChar = char;
    }
  }
  return currMaxChar;
}

module.exports = maxChar;
