/* exported capitalizeWord */
function capitalizeWord(word) {
  var lay = word.toLowerCase();
  if (lay === 'javascript') {
    return 'JavaScript';
  }
  var kev = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    kev += word[i].toLowerCase();
  }
  return kev;
}
