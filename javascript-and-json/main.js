var array = [{
  title: 'Hatchet',
  isbn: '9780027701302',
  author: 'Gary Paulsen'
},
{
  title: 'Giver',
  isbn: '9780007141425',
  author: 'Lois Lowry'

},
{
  title: 'Outsiders',
  isbn: '9780140385724',
  author: 'S.E Hinton'
}];
console.log(typeof array, array);

console.log(JSON.stringify(array));
console.log(typeof JSON.stringify(array));

var stringThree = '{ "id": 36844, "name": "paul" }';
console.log(stringThree);
console.log(typeof stringThree);

var obj = JSON.parse(stringThree);
console.log(obj);
console.log(typeof obj);
