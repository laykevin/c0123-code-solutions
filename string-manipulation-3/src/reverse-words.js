/* exported reverseWords */
function reverseWords(string) {
  var kev = string.split(' ');
  var lay = '';
  for (var i = 0; i < kev.length; i++) {
    for (var o = kev[i].length - 1; o >= 0; o--) {
      lay += kev[i][o];
    }
    if (lay.length < string.length) {
      lay += ' ';
    }
  }
  return lay;
}
