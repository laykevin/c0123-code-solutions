var $text = document.querySelectorAll('span');
var i = 0;
function help(event) {
  if (event.key === $text[i].textContent) {
    if (i === $text.length - 1) {
      $text[i].className = 'green';
      i++;
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
  $playAgain.className = 'row';
}

var $noButton = document.querySelector('.no');
$noButton.addEventListener('click', noButton);
function noButton(event) {
  $playAgain.className = 'hide';
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
}
