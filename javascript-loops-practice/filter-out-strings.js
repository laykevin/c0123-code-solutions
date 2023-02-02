/* exported filterOutStrings */
function filterOutStrings(values) {
  var kev = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      kev.push(values[i]);
    }
  } return kev;
}
