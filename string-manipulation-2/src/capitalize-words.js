/* exported capitalizeWords */
function capitalizeWords(string) {
  var kev = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      kev += ' ' + string[i + 1].toUpperCase();
      i++;
    } else {
      kev += string[i].toLowerCase();
    }
  }
  return kev;
}
