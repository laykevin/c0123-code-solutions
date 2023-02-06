var numberOfClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
function clickCounter(event) {
  numberOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;
  if (numberOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  }
  if (numberOfClicks < 7 && numberOfClicks > 3) {
    $hotButton.className = 'hot-button cool';
  }
  if (numberOfClicks < 10 && numberOfClicks > 6) {
    $hotButton.className = 'hot-button tepid';
  }
  if (numberOfClicks < 13 && numberOfClicks > 9) {
    $hotButton.className = 'hot-button warm';
  }
  if (numberOfClicks < 16 && numberOfClicks > 12) {
    $hotButton.className = 'hot-button hot';
  }
  if (numberOfClicks > 15) {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', clickCounter);
