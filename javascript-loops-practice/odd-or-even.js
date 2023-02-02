/* exported oddOrEven */
function oddOrEven(numbers) {
  var kev = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      kev.push('even');
    } else {
      kev.push('odd');
    }
  }
  return kev;
}
