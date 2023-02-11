/* exported union */
function union(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }
  for (var o = 0; o < second.length; o++) {
    if (!newArr.includes(second[o])) {
      newArr.push(second[o]);
    }
  }
  return newArr;
}
