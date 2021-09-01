/* exported tail */
function tail(array) {
  var newarr = [];
  for (var i = 1; i < array.length; i++) {
    newarr.push(array[i]);
  }
  return newarr;
}
