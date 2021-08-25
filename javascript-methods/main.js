var one = 1;
var two = 2;
var three = 3;
var maximumValue = Math.max(one, two, three);
console.log(maximumValue);

var heroes = ['superman', 'batman', 'spiderman', 'greenlantern'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [{
  title: 'harrypotter',
  author: 'J.K. rowling'
},
{
  title: 'Outsiders',
  author: 'S.E Hinton'
},
{
  title: 'giver',
  author: 'Lois Lowry'
}];

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'sal garcia';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
