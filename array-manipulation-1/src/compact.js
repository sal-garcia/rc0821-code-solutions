/* exported compact */
function compact(array) {
  var arrayNew = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arrayNew.push(array[i]);
    }
  }
  return arrayNew;
}

/*
1.go thru all the elements in the array
2. delte them if they are equal to the unated values
3. push the good values into the new array
4. return the new array */
