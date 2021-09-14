/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var charactersOfString = string.split('');
  var letterOne = charactersOfString[firstIndex];
  charactersOfString[firstIndex] = charactersOfString[secondIndex];
  charactersOfString[secondIndex] = letterOne;
  return charactersOfString.join('');
}
