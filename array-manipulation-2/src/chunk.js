/* exported chunk */
function chunk(array, size) {
  // var kev = [];
  // for (var i = 0; i < array.length; i += size) {
  //   kev.push(array.slice(i, i + size));
  // }
  // return kev;
  var kev = [];
  var lay = [];
  for (var i = 0; i < array.length; i++) {
    kev.push(array[i]);
    if (kev.length === size) {
      lay.push(kev);
      kev = [];
    }
  }
  if (array.length % size !== 0) {
    lay.push(kev);
  }
  return lay;
}
