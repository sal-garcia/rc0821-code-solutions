/* exported numVowels */
function numVowels(string) {
  var vowel = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A') {
      vowel++;
    } else if (string[i] === 'e' || string[i] === 'E') {
      vowel++;
    } else if (string[i] === 'i' || string[i] === 'I') {
      vowel++;
    } else if (string[i] === 'O' || string[i] === 'o') {
      vowel++;
    } else if (string[i] === 'U' || string[i] === 'u') {
      vowel++;
    }
  }
  return vowel;
}
