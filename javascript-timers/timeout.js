setTimeout(changeHeading, 2000);
function changeHeading() {
  var message = document.querySelector('h1');
  message.textContent = 'Hello There';
}
