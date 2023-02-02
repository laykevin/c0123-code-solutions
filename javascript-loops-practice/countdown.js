/* exported countdown */
function countdown(number) {
  var kev = [];
  while (number >= 0) {
    kev.push(number);
    number--;
  }
  return kev;
}
