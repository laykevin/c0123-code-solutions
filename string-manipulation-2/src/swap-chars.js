/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var kev = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      kev += string[secondIndex];
    }
    if (i === secondIndex) {
      kev += string[firstIndex];
    }
    if (i !== firstIndex && i !== secondIndex) {
      kev += string[i];
    }
  }
  return kev;
}
