/* exported reverseWord */
function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}

/*
1. create new string container
2.start from the end of the array
3. decrement until 0
4.push into the string container
*/
