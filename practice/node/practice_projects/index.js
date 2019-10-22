var _ = require ("lodash");

var randomNumber = _.random(60, 90);

var jsNumber = Math.floor((Math.random() * 30) + 60);

console.log(randomNumber, jsNumber)

var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }

console.log(_.invert(object));
console.log(object)