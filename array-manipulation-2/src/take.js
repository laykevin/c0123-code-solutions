/* exported take */
function take(array, count) {
  var kev = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    kev.push(array[i]);
  }
  return kev;
}
