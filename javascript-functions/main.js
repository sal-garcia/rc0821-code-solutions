function convertMinutesToseconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log(convertMinutesToseconds(5));

function greet(name) {
  var greeting = 'hello' + ' ' + name;
  return greeting;
}

console.log(greet('sal'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log(getArea(5, 4));

function getFirstName(person) {
  var name = person.firstName;
  return name;
}
var object = {
  firstName: 'Cash',
  lastName: 'Money'
};

console.log(getFirstName(object));

function getLastElement(array) {
  var last = array.length;
  return last;
}
var array = [1, 2, 3, 4];
console.log(getLastElement(array));
