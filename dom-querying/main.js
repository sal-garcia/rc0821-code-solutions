console.log('hello world');
var first = document.querySelector('h1');
console.log(first);
console.dir(first);

var second = document.querySelector('#explanation');
console.log(second);
console.dir(second);

var third = document.querySelector('.hint');
console.log(third);
console.dir(document.querySelector('.hint'));

console.log(document.querySelectorAll('p'));
console.log(document.querySelectorAll('.example-link'));
