var $dotRow = document.querySelector('.dots');
var $changeDots = document.querySelectorAll('div.dots > i');
var $pictureList = document.querySelectorAll('div.hidden > img');
var $changePicture = document.querySelector('.picture');
var $arrowButtons = document.querySelector('.center');

$dotRow.addEventListener('click', dotFunction);
function dotFunction(event) {
  if (event.target.tagName === 'I') {
    timeoutFunction();
    for (var i = 0; i < $changeDots.length; i++) {
      $changeDots[i].className = 'fa-regular fa-circle';
      if (event.target.id === $changeDots[i].id) {
        $changeDots[i].className = 'fa-solid fa-circle';
        for (var o = 0; o < $pictureList.length; o++) {
          if ($changeDots[i].id === $pictureList[o].className) {
            $changePicture.src = $pictureList[o].src;
          }
        }
      }
    }
  }
}

$arrowButtons.addEventListener('click', arrowfunction);
function arrowfunction(event) {
  if (event.target.tagName === 'IMG') {
    timeoutFunction();
  }
  if (event.target.id === 'left') {
    timeoutFunction();
    var $leftArrow = document.getElementsByClassName('fa-solid fa-circle');
    if ($leftArrow[0].id === $changeDots[0].id) {
      $changeDots[$changeDots.length - 1].className = 'fa-solid fa-circle';
      $changeDots[0].className = 'fa-regular fa-circle';
      $changePicture.src = $pictureList[4].src;
    } else {
      for (var k = 1; k < $changeDots.length; k++) {
        if ($leftArrow[0].id === $changeDots[k].id) {
          $changeDots[k - 1].className = 'fa-solid fa-circle';
          $changeDots[k].className = 'fa-regular fa-circle';
          $changePicture.src = $pictureList[k - 1].src;
        }
      }
    }
  }
  if (event.target.id === 'right') {
    timeoutFunction();
    var $rightArrow = document.getElementsByClassName('fa-solid fa-circle');
    if ($rightArrow[0].id === $changeDots[$changeDots.length - 1].id) {
      $changeDots[0].className = 'fa-solid fa-circle';
      $changeDots[$changeDots.length - 1].className = 'fa-regular fa-circle';
      $changePicture.src = $pictureList[0].src;
    } else {
      for (var p = $changeDots.length - 2; p >= 0; p--) {
        if ($rightArrow[0].id === $changeDots[p].id) {
          $changeDots[p + 1].className = 'fa-solid fa-circle';
          $changeDots[p].className = 'fa-regular fa-circle';
          $changePicture.src = $pictureList[p + 1].src;
        }
      }
    }
  }
}

function rightIntervalFunction() {
  var $rightArrow = document.getElementsByClassName('fa-solid fa-circle');
  if ($rightArrow[0].id === $changeDots[$changeDots.length - 1].id) {
    $changeDots[0].className = 'fa-solid fa-circle';
    $changeDots[$changeDots.length - 1].className = 'fa-regular fa-circle';
    $changePicture.src = $pictureList[0].src;
  } else {
    for (var p = $changeDots.length - 2; p >= 0; p--) {
      if ($rightArrow[0].id === $changeDots[p].id) {
        $changeDots[p + 1].className = 'fa-solid fa-circle';
        $changeDots[p].className = 'fa-regular fa-circle';
        $changePicture.src = $pictureList[p + 1].src;
      }
    }
  }

}
function timeoutFunction() {
  clearInterval(intervalID);
  intervalID = setInterval(rightIntervalFunction, 3000);
}
var intervalID = setInterval(rightIntervalFunction, 3000);
