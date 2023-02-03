/* exported reverse */
function reverse(array) {
  var kev = [];
  for (var i = array.length - 1; i >= 0; i--) {
    kev.push(array[i]);
  }
  return kev;
}

// Define a function named reverse that takes one arguement 'array', that is an array.
//   Declare a variable named 'kev' with the value of an empty array.
//   Loop through each item of the arguement 'array' from the end to the start.
//   Push each item into the variable 'kev'.
//   Return variable 'kev'.
