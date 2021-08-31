var click = 0;
var $background = document.querySelector('.bod');
var $lightBulb = document.querySelector('.circle');

$background.addEventListener('click', blackened);

function blackened(event) {
  click++;
  if (click !== 0) {
    $background.className += ' black-background';
    $lightBulb.className += ' clicked-light-bulb';

  }
}
