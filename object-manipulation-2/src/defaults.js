/* exported defaults */
function defaults(target, source) {
  for (var i in source) {
    if (target[i] === undefined) {
      target[i] = source[i];
    }
  }
}
