/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 'even';
      array.push(numbers[i]);
    } else {
      numbers[i] = 'odd';
      array.push(numbers[i]);
    }
  }
  return array;

}
