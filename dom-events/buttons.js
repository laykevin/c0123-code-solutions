function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $buttonClick = document.querySelector('.click-button');
$buttonClick.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $buttonHover = document.querySelector('.hover-button');
$buttonHover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleclick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $buttonDoubleClick = document.querySelector('.double-click-button');
$buttonDoubleClick.addEventListener('dblclick', handleDoubleclick, false);
