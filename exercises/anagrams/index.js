// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return getSortedString(stringA) === getSortedString(stringB);
}

function getSortedString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const stringAarr = stringA.split(" ").join("").split("");
//   const stringBarr = stringB.split(" ").join("").split("");
//   const stringAMap = stringAarr.reduce(mapChars, {});
//   const stringBMap = stringBarr.reduce(mapChars, {});
//   const keysCountA = Object.keys(stringAMap).length;
//   const keysCountB = Object.keys(stringBMap).length;
//   if (keysCountA !== keysCountB) {
//     return false;
//   }
//   for (let key in stringAMap) {
//     const countA = stringAMap[key];
//     const countB = stringBMap[key];
//     if (countA !== countB) {
//       return false;
//     }
//   }
//   return true;
// }

// function mapChars(charMap, char) {
//   const alphaPattern = /[a-z]/g;
//   if (char.match(alphaPattern)) {
//     charMap[char.toLowerCase()] = charMap[char.toLowerCase()] + 1 || 1;
//   }
//   return charMap;
// }
