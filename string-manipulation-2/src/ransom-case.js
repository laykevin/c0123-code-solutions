/* exported ransomCase */
function ransomCase(string) {
  var kev = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      kev += string[i].toLowerCase();
    }
    if (i % 2 !== 0) {
      kev += string[i].toUpperCase();
    }
  }
  return kev;
}
