/* exported drop */
function drop(array, count) {
  var kev = [];
  for (var i = count; i < array.length; i++) {
    kev.push(array[i]);
  }
  return kev;
}
