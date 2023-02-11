/* exported titleCase */
function titleCase(title) {
  var kev = title.toLowerCase().split(' ');
  var help = [];
  for (var i = 0; i < kev.length; i++) {
    if (kev[i] === 'javascript') {
      kev[i] = 'JavaScript';
    }
    if (kev[i] === 'javascript:') {
      kev[i] = 'JavaScript:';
    }
    if (kev[i] === 'api') {
      kev[i] = 'API';
    }
    if (kev[i] === 'and' || kev[i] === 'or' || kev[i] === 'nor' || kev[i] === 'but' || kev[i] === 'a' || kev[i] === 'an' || kev[i] === 'the' || kev[i] === 'as' || kev[i] === 'at' || kev[i] === 'by' || kev[i] === 'for' || kev[i] === 'in' || kev[i] === 'of' || kev[i] === 'on' || kev[i] === 'per' || kev[i] === 'to') {
      help.push([kev[i]]);
    } else {
      help.push(kev[i].replace(kev[i][0], kev[i][0].toUpperCase()));
    }
  }
  var lay = help.join(' ');
  var layZ = '';
  for (var o = 0; o < lay.length; o++) {
    if (lay[o] === ':' && layZ.length < lay.length) {
      layZ += ': ' + lay[o + 2].toUpperCase();
      o += 3;
    }
    if (lay[o] === '-' && layZ.length < lay.length) {
      layZ += '-' + lay[o + 1].toUpperCase();
      o += 1;
    } else {
      layZ += lay[o];
    }
  }
  return layZ.replace(lay[0], lay[0].toUpperCase());
}
