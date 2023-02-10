/* exported intersection */
function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    for (var o = 0; o < second.length; o++) {
      if (second[o] === first[i]) {
        newArr.push(second[o]);
      }
    }
  }
  return newArr;
}
