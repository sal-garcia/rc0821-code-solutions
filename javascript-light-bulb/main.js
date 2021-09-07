var click = 0;
var $background = document.querySelector('.bod');
var $lightBulb = document.querySelector('.circle');

$background.addEventListener('click', blackened);

function blackened(event) {
  click++;
  if (click % 2 === 1) {
    $background.classList.remove('white');
    $background.classList.add('black-background');
    $lightBulb.classList.add('clicked-light-bulb');
  } else if (click % 2 === 0) {
    $background.classList.remove('black-background');
    $background.classList.add('white');
    $lightBulb.classList.remove('clicked-light-bulb');
    $lightBulb.className.add('yellow');
  }
}
