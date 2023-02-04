/* exported takeRight */
function takeRight(array, count) {
  var kev = [];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    kev.push(array[i]);
  }
  return kev;
}
