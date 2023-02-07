var $buttonToggle = document.querySelector('button');
var $bodyColor = document.querySelector('.bg-color');
function clickButton(event) {

  if ($buttonToggle.className === 'button-black') {
    $bodyColor.className = 'bg-color';
    $buttonToggle.className = 'button';
    return;
  }

  if ($buttonToggle.className === 'button') {
    $bodyColor.className = 'bg-color-black';
    $buttonToggle.className = 'button-black';
  }

  // if ($bodyColor.className === 'bg-color-black') {
  //   $bodyColor.className = 'bg-color';
  //   $buttonToggle.className = 'button';
  // }
}
$buttonToggle.addEventListener('click', clickButton);
