/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  var words = string.split(' ');
  return words;
}

// Define a function named getWords that accepts one arguement 'string' which is a string.
//   If the string is an empty string, return an empy Array.
//   Declare a variable 'words' and assign it the value of the arguement 'string' split into an array at each ' ' Character.
//   return the variable 'words'
