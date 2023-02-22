var intervalID = setInterval(interval, 1000);
function interval() {
  var timer = document.querySelector('.countdown-display');
  timer.textContent = timer.textContent - 1;
  if (timer.textContent === '0') {
    timer.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
