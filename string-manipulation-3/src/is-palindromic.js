/* exported isPalindromic */
function isPalindromic(string) {
  // var kev = '';
  // for (var i = 0; i < string.length; i++) {
  //   if (string[i] === ' ') {
  //     continue;
  //   }
  //   kev += string[i];
  // }
  var kev = string.replaceAll(' ', '');
  var lay = '';
  for (var o = string.length - 1; o >= 0; o--) {
    if (string[o] === ' ') {
      continue;
    }
    lay += string[o];
  }
  if (kev === lay) {
    return true;
  } else {
    return false;
  }
}
