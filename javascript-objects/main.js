var firstName = 'sal';
var lastName = 'Garcia';
var age = 21;

var student = { firstName, lastName, age };

var fullName = student.firstName + student.lastName;

console.log('value ', fullName);

student.livesInIrivine = false;
student.previousOcuppation = 'mechanic';
console.log(student.livesInIrivine);
console.log(student.previousOcuppation);

var make = 'volkswagen';
var model = 'beatle';
var year = 1980;
var vehicle = { make, model, year };
vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log(vehicle);

var name = 'rupert';
var type = 'dog';
var pet = { name, type };
delete pet['name'];
delete pet['type'];
console.log(pet);
