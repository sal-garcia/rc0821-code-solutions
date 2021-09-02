/* exported chunk */
function chunk(array, size) {
  var container = [];
  var count = 0;
  var containerSecond = [];

  if (array.length === 0) {
    return [];
  }

  for (var i = 0; i < array.length; i++) {
    if (count < size) {
      containerSecond[count] = array[i];
      count++;
    }
    if (count === size) {
      container.push(containerSecond);
      count = 0;
      containerSecond = [];
    }
  }
  if (containerSecond.length !== 0) container.push(containerSecond);
  return container;
}
