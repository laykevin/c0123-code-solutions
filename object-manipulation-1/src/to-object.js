/* exported toObject */
function toObject(keyValuePair) {
  // var kev = {};
  // kev.keyValuePair[0] = keyValuePair[1];
  // return kev;
  // ^This will add a property named keyValuePair, but by using bracket notation
  // we can add the arguement instead.

  // var obj = {};
  // var kev = keyValuePair[0];
  // obj[kev] = keyValuePair[1];
  // return obj;

  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

// Define a function named toObject that accepts one arguement 'keyValuePair' that is an Array.
//   Declare a variable named 'obj' that is an empty Object.
//   Set the value of a new property that is first index of arguement 'keyValuePair' to the second index of arguement 'keyValuePair'.
// Return variable 'obj'
