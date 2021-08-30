/* exported filterOutStrings */
function filterOutStrings(values) {
  var Array = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      Array.push(values[i]);
    }
  }
  return Array;
}
