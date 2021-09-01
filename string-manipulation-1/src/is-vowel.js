/* exported isVowel */
function isVowel(char) {
  var boolean = false;
  if (char === 'A' || char === 'a') {
    boolean = true;
  } else if (char === 'E' || char === 'e') {
    boolean = true;
  } else if (char === 'I' || char === 'i') {
    boolean = true;
  } else if (char === 'O' || char === 'o') {
    boolean = true;
  } else if (char === 'U' || char === 'u') {
    boolean = true;
  }
  return boolean;
}
/*
1. define a boolean variable with the value of false
2. multiple conditional statements to see if any of the conditions for vowels are met
3. if the condition is met for any of the values assign the value of true to the boolean variable
4. return the boolean variable
*/
