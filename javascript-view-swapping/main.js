var $tabContainer = document.querySelector('.tab-container');
var $tabNode = document.querySelectorAll('.tab');
var $viewNode = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', activate);
function activate(event) {
  if (event.target.matches('.tab active')) {
    return;
  }
  for (var i = 0; i < $tabNode.length; i++) {
    if (event.target === $tabNode[i]) {
      $tabNode[i].className = 'tab active';
    } else {
      $tabNode[i].className = 'tab';
    }
  }
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var o = 0; o < $viewNode.length; o++) {
      if ($viewNode[o].getAttribute('data-view') === $dataView) {
        $viewNode[o].className = 'view';
      } else {
        $viewNode[o].className = 'view hidden';
      }
    }
  }
}
