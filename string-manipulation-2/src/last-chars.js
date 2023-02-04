/* exported lastChars */
function lastChars(length, string) {
  var kev = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    kev += string[i];
  }
  return kev;
}
