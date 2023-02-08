var $button = document.querySelector('.modal');
var $survey = document.querySelector('.row');
function survey(event) {
  $survey.className = 'row-clicked';
}
$button.addEventListener('click', survey);

var $noButton = document.querySelector('.no');
function nope(event) {
  $survey.className = 'row';
}
$noButton.addEventListener('click', nope);
