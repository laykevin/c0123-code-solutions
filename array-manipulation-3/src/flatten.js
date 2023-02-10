/* exported flatten */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var o = 0; o < array[i].length; o++) {
        newArray.push(array[i][o]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
