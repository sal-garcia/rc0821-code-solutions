/* exported getValues */
function getValues(object) {
  var array = [];
  for (var par in object) {
    array.push(object[par]);
  }
  return array;
}

/*
1. define a varable that stores an empty array
2. use a for look to get the value of each property in the object
3. push those values into the array
4. return that array
*/
