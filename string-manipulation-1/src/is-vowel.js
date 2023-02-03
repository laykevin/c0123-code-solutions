/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}

// Define a function named isVowel which accepts on arguement 'char', which is a String.
// if the argument 'char' is an upper case or lower case isVowel, return true.
// Otherwise return false
