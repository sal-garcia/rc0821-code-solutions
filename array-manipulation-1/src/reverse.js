/* exported reverse */
function reverse(array) {
  var newarr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newarr.push(array[i]);
  }
  return newarr;
}
