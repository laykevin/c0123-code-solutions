var $text = document.querySelectorAll('span');
var $accuracy = document.querySelector('em');
var $accuracy2 = document.querySelector('.accuracy2');
var $msg = document.querySelector('h1');
var $afterGame = document.querySelector('.hide2');
var i = 0;
var count = 0;
function help(event) {
  count++;
  if (event.key === $text[i].textContent) {
    if (i === $text.length - 1) {
      $text[i].className = 'green';
      i++;
      $accuracy2.textContent = Math.round(($text.length / count) * 100);
      $accuracy.textContent = Math.round(($text.length / count) * 100);
      return playAgain();
    }
    $text[i].className = 'green';
    $text[i + 1].className = 'underline';
    i++;
  } else {
    $text[i].className = 'red underline';
  }
}
document.addEventListener('keydown', help);
var $playAgain = document.querySelector('.hide');
function playAgain(event) {
  if (Math.round(($text.length / count) * 100) < 70) {
    $msg.textContent = 'You Suck!';
  }
  if (Math.round(($text.length / count) * 100) >= 70) {
    $msg.textContent = 'You did it!';
  }
  $playAgain.className = 'row';
}

var $noButton = document.querySelector('.no');
$noButton.addEventListener('click', noButton);
function noButton(event) {
  $playAgain.className = 'hide';
  $afterGame.className = 'row2';
}
var $yesButton = document.querySelector('.yes');
$yesButton.addEventListener('click', yesButton);
function yesButton(event) {
  for (var o = 0; o < $text.length; o++) {
    $text[o].className = '';
  }
  $text[0].className = 'underline';
  $playAgain.className = 'hide';
  i = 0;
  count = 0;
  $afterGame.className = 'hide2';
}

var $restartButton = document.querySelector('.restart');
$restartButton.addEventListener('click', yesButton);
