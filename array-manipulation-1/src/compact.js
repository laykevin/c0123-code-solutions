/* exported compact */
function compact(array) {
  var kev = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      kev.push(array[i]);
    }
  }
  return kev;
}

// Define a function named 'compact' that takes one arguement 'array', that is an array.
//   Declare a variable named 'kev' and assign an empty array to it.
//   Loop through every item in the arguement 'array'.
//   If the item is truthy, push that value into variable 'kev'.
//   Return variable 'kev'.
