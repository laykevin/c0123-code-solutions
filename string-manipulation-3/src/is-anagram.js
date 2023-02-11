/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var stringOnePrep = firstString.split(' ');
  var stringTwoPrep = secondString.split(' ');
  var stringOne = stringOnePrep.join('');
  var stringTwo = stringTwoPrep.join('');
  var splitOne = stringOne.split('');
  var splitTwo = stringTwo.split('');
  var orderOne = splitOne.sort();
  var orderTwo = splitTwo.sort();
  var finalOne = orderOne.join('');
  var finalTwo = orderTwo.join('');
  if (finalOne === finalTwo) {
    return true;
  } else {
    return false;
  }
}
