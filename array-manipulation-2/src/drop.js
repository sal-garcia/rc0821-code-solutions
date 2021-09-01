/* exported drop */
function drop(array, count) {
  var container = [];

  for (var i = count; i < array.length; i++) {
    container.push(array[i]);

  }
  return container;
}

/*
1. add a container variable with the value of an empty array
2. use a for loop to go from count to the end of the array
3.push each [i] element from count to the end one by one
4.return the container array
*/
