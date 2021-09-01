
var $purpleButton = document.querySelector('.purple-button');
var $popUp = document.querySelector('.popup');
$purpleButton.addEventListener('click', showHidden);

function showHidden(event) {

  $popUp.classList.remove('hidden');
  $popUp.classList.add('black');

}

var $orangeButton = document.querySelector('.orange-button');
$orangeButton.addEventListener('click', normal);

function normal(event) {
  $popUp.classList.add('hidden');
  $popUp.classList.remove('black');

}
