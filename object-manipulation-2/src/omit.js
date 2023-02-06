/* exported omit */
function omit(source, keys) {
  // var kev = source;    //<-- reference data type :( (they dont wan't us to mutate I think)
  // for (var i = 0; i < keys.length; i++) {
  //   if (source[keys[i]] !== undefined) {
  //     delete kev[keys[i]];
  //   }
  // }
  // return kev;
  var kev = {};
  for (var o in source) {
    kev[o] = source[o];
  }
  for (var i = 0; i < keys.length; i++) {
    if (kev[keys[i]] !== undefined) {
      delete kev[keys[i]];
    }
  }
  return kev;
}
