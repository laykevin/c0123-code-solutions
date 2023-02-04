/* exported dropRight */
function dropRight(array, count) {
  var kev = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    kev.push(array[i]);
  }
  return kev;
}
