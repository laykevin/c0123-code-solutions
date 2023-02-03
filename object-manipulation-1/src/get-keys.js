/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}

// Define a function named getKeys that accepts one arguement 'object' that is an object.
//   Declare a variable named 'keys' that is an empty Array.
//   Loop through each property of arguement 'object'.
//   Push each property to variable 'keys'.
//   Return variable 'keys'.
