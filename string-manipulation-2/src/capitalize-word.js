/* exported capitalizeWord */
function capitalizeWord(word) {
  var char;
  if (word) {
    char = word[0].toUpperCase() + word.slice(1).toLowerCase();

  } if (char === 'Javascript') {

    char = 'JavaScript';

  }
  return char;
}
