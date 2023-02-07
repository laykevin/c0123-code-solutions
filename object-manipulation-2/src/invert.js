/* exported invert */
function invert(source) {
  var kev = {};
  for (var i in source) {
    kev[source[i]] = i;
  }
  return kev;
}
