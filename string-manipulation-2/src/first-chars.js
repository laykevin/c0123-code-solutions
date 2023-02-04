/* exported firstChars */
function firstChars(length, string) {
  var kev = '';
  if (length > string.length) {
    return string;
  }
  for (var i = 0; i < length; i++) {
    kev += string[i];
  }
  return kev;
}
