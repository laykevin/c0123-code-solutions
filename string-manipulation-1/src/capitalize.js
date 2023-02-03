/* exported capitalize */
function capitalize(word) {
  // return word.toUpperCase();
  var kev = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    kev += word[i].toLowerCase();
  }
  return kev;
}

// Define a function named 'capitalize' that accepts one arguement, 'word' which is a string.
// Declare a variable names 'kev', and assign it to the upper case version of the first letter or 'word'
// Begin a loop that iterates through the second letter of 'word' to the last letter of 'word'.
//   For each index after the first of the string:
//     Change each index to lower case and concatenate each index to variable 'kev'
// After the loop, return the value of variable(kev).
