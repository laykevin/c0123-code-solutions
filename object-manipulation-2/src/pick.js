/* exported pick */
function pick(source, keys) {
  var kev = {};
  for (var i = 0; i < keys.length; i++) {
    // if (source.hasOwnProperty(keys[i]))
    if (source[keys[i]] !== undefined) {
      kev[keys[i]] = source[keys[i]];
    }
  }
  return kev;
}
