/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      newArray.push([first[i], second[i]]);
    }
  } else {
    for (var o = 0; o < second.length; o++) {
      newArray.push([first[o], second[o]]);
    }
  }
  return newArray;
}
