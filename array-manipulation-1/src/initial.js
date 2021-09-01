/* exported initial */
function initial(array) {
  var arrayNew = [];
  for (var i = 0; i < array.length - 1; i++) {
    arrayNew.push(array[i]);
  }
  return arrayNew;
}
