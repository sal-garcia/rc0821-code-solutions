var countNumber = 4;
var intervalId = setInterval(function () {
  var $count = document.querySelector('h1');

  if (countNumber === 0) {
    $count.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);

  } else {
    countNumber--;
    $count.innerHTML = countNumber;
  }
}, 1000);
