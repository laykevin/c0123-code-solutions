/* exported truncate */
function truncate(length, string) {
  if (length > string.length) {
    return string + '...';
  }
  var kev = '';
  for (var i = 0; i < length; i++) {
    kev += string[i];
  }
  return kev + '...';
}
