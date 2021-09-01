/* exported capitalize */
function capitalize(word) {
  var last = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return last;
}
