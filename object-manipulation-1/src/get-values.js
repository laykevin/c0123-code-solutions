/* exported getValues */
function getValues(object) {
  var values = [];
  for (var i in object) {
    values.push(object[i]);
  }
  return values;
}
