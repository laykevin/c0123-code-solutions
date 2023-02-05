/* exported reverseWord */
function reverseWord(word) {
  var kev = '';
  for (var i = word.length - 1; i >= 0; i--) {
    kev += word[i];
  }
  return kev;
}

// Define a function named reverseWord which takes one arguement 'word', that is a String.
//   Declare a varible named 'kev', and assign it the value of an empty String.
//   Begin a loop that iterates backwards through the arguement 'word', which is a String.
//     Concatenate each index to variable 'kev'.
//   Return the value of varible 'kev'.
