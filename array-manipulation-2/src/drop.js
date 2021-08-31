/* exported drop */
function drop(array, count) {
  var container = [];
  if (array > 0) {

    container.push(array.indexOf([count]));
  }
  return container;
}
