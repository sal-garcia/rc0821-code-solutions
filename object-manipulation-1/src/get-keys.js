/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var prop in object) {
    array.push(prop);
  }
  return array;
}

/*
1. define the function
2. define a storage variable of an array
3. define a for loop that will get the properties of each element
4.push
*/
