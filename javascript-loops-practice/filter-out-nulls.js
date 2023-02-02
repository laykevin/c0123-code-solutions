/* exported filterOutNulls */
function filterOutNulls(values) {
  var kev = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      kev.push(values[i]);
    }
  }
  return kev;
}
