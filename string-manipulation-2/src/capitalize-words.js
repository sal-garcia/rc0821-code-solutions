/* exported capitalizeWords */
function capitalizeWords(string) {
  var splittingString = string.split(' ');
  for (var i = 0; i < splittingString.length; i++) {
    splittingString[i] = splittingString[i][0].toUpperCase() + splittingString[i].substr(1).toLowerCase();
  }
  return splittingString.join(' ');
}
