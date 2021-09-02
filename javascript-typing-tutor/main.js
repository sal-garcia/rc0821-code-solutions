var $span = document.querySelectorAll('span');// creates list of all the span elements
var indexPlace = 0;
/* document because its listening to the whole document
for the keydown event */
document.addEventListener('keydown', characters);

function characters(event) {
/* if there are no characters in event
key and only the index place is left
*/
  if ($span.length === indexPlace) {

    return null;
  }

  /* if the text content of $span at indexPlace is equal to
  the event key(event key returns the value of the key pressed by the user,) */

  if ($span[indexPlace].textContent === event.key) {
    $span[indexPlace].classList.add('green');
    $span[indexPlace].classList.remove('bottomBlack');
    $span[indexPlace].classList.remove('red');
    $span[indexPlace].classList.remove('bottomRed');
    indexPlace++;

    if ($span.length === indexPlace) {
      return null;
    }
    $span[indexPlace].classList.add('bottomBlack');

  } else {
    $span[indexPlace].classList.add('red');
    $span[indexPlace].classList.add('bottomRed');
  }
}
