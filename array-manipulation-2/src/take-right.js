/* exported takeRight */
function takeRight(array, count) {
  var storage = [];
  var j = 0;
  if (array.length > 0) {
    for (var i = array.length - count; i < array.length; i++) {
      storage[j] = array[i];
      j++;

    }
    return storage;
  } else {
    return array;
  }
}
