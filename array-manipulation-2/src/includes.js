/* exported includes */
function includes(array, value) {
  var boolean = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      boolean = true;
    }
  }
  return boolean;
}
/*
1. assign a storage variable for a boolean set to false
2.use a for loop to go thru each element in the array
3. in the for loop code block add an if conditional statement
that checks if any [i] element of the array is equal to the value
4.if it is add update the boolean value to be true
*/
