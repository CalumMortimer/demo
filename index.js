const fibonacci = require('fibonacci');
const key = require('./secret.js');

console.log('hello world');

console.log("My super secret key, that nobody should see, is: ", key);

const hundredthFibNumber = fibonacci.iterate(100);

console.log('the hundredth number in the fibonacci sequence is: ', hundredthFibNumber);