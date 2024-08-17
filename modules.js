//console.log(arguments);
// console.log(require('module').wrapper);

//module.exports
// const Calculator = require('./test-module-1'); //importing a Class here so need to create new object for calculation
// const calculator1 = new Calculator();
// console.log(calculator1.add(23, 32));

//module.exports
const calc = require('./test-module-1'); //importing a Class here so need to create new object for calculation
console.log(calc.add(23, 32));

//exports
const calculator2 = require('./test-module-2');
console.log(calculator2);
console.log(calculator2.add(23, 32));
const { add, multiply, divide } = require('./test-module-2');
console.log(add(23, 32));

//Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
