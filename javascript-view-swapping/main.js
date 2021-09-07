var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', checks);

function checks(event) {

  if (event.target.matches('.tab')) {

    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].classList.add('active');
      } else {
        $tab[i].classList.remove('active');
      }
    }

    var $dataView = event.target.getAttribute('data-view');

    for (var o = 0; o < $view.length; o++) {
      if ($view[o].getAttribute('data-view') !== $dataView) {
        $view[o].className = 'view hidden';
      } else {
        $view[o].className = 'view';
      }
    }
  }
}
