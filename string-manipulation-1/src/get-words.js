/* exported getWords */
function getWords(string) {
  var array = [];
  array = string.split(' ');
  if (string === '') {
    array = [];
  }
  return array;
}

/*
1. define a variable to store an array
2. split the string after each space
3. assign that to the array variable
4. a conditional statemen tincase the string is empty
5. return an empty array if the array is empty
6. return the variable that stores the array.
*/
