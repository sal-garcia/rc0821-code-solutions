var numberOfClicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
hotButton.addEventListener('click', hotbtn);
function hotbtn(event) {
  numberOfClicks++;
  clickCount.textContent = numberOfClicks;
  if (numberOfClicks < 4) {
    hotButton.className += ' cold';
  } else if (numberOfClicks > 3 && numberOfClicks < 7) {
    hotButton.className += ' cool';
  } else if (numberOfClicks > 6 && numberOfClicks < 10) {
    hotButton.className += ' tepid';
  } else if (numberOfClicks > 9 && numberOfClicks < 13) {
    hotButton.className += ' warm';
  } else if (numberOfClicks > 12 && numberOfClicks < 16) {
    hotButton.className += ' hot';
  } else {
    hotButton.className = ' hot-button nuclear ';
  }
}
