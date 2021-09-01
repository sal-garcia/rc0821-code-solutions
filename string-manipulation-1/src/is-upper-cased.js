/* exported isUpperCased */
function isUpperCased(word) {
  var boolean = false;
  if (word === word.toUpperCase()) {
    boolean = true;
  }
  return boolean;
}

/*
1. define a storage variable with the value of false
2. conditinal if statement checking if string is equal to capitalized string
3. if it is assign true  to the boolean variable
4. after all return the boolean value
*/
