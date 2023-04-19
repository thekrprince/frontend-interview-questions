// Strict equality

console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(3 === 3); // true
console.log(3 === '3'); // false

const number1 = new Number(3);
const number2 = new Number(3);
console.log(number1 == 3); // true
console.log(number1 == number2); // false

/** Strings **/
console.log('hello' === 'hello'); // true
console.log('hello' == 'hello'); // true
console.log('hello' === 'Hello'); // false

/** Comparing strings and String objects **/
const string1 = 'hello';
const string2 = String('hello');
const string3 = new String('hello');
const string4 = new String('hello');

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

/** Boolean **/
console.log(true === true); // true
console.log(true == true); // true
console.log(true === false); // false
console.log(1 === true); // false
console.log(true == 1); // true
console.log(0 == false); // true
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(0 == !!null); // true, look at Logical NOT operator
console.log(0 == !!undefined); // true, look at Logical NOT operator

console.log(null === null); // true
console.log(null === undefined); // false
console.log(null == undefined); // true

/** Comparing Objects **/
const object1 = {
  key: 'value',
};

const object2 = {
  key: 'value',
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true

/** Comparing arrays and strings **/
const a = [1, 2, 3];
const b = '1,2,3';
console.log(a == b); // true, `a` converts to string

const c = [true, 0.5, 'hey'];
const d = c.toString(); // "true,0.5,hey"
console.log(c == d); // true
