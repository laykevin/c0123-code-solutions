/* exported tail */
function tail(array) {
  var kev = [];
  for (var i = 1; i < array.length; i++) {
    kev.push(array[i]);
  }
  return kev;
}

// Define a function named tail that takes one arguement 'array', that is an array.
//   Declare a variable named 'kev', that is an empty array.
//   Loop through each index of the arguement 'array', except the first index.
//   Push each index into variable 'kev'.
//   Return variable 'kev'.
