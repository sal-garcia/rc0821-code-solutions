function ExampleConstructor() {

}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var functionWithNew = new ExampleConstructor();
console.log(functionWithNew);

var instanceFunc = functionWithNew instanceof ExampleConstructor;
console.log(instanceFunc)
;
