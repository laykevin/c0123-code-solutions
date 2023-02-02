/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  var kev = [];
  for (var i = 0; i < word.length; i++) {
    kev.push(word[i] + suffix);
  }
  return kev;
}
