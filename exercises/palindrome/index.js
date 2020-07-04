// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversedStr = str
//     .split("")
//     .reduce((reversed, char) => char + reversed, "");
//   return reversedStr === str;
// }

// function palindrome(str) {
//   if (str.length === 1 || str.length === 0) {
//     return true;
//   }
//   const firstChar = str[0];
//   const lastChar = str[str.length - 1];
//   if (firstChar !== lastChar) {
//     return false;
//   }
//   return palindrome(str.substring(1, str.length - 1));
// }
