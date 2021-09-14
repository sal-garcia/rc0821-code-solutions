/* exported ransomCase */
function ransomCase(string) {
  var stringHolder = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      stringHolder += string[i].toUpperCase();
    } else {
      stringHolder += string[i].toLowerCase();
    }
  }
  return stringHolder;
}
