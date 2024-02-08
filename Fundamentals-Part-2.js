/* Lesson Overview
 *
 * Name the eight data types in javascript
 * Understand the difference between single, double, and backtick quotes
 * Embed a variable/expression in a string
 * Understand what a method is
 * Name the three logical operators
 * Understand what the comparrison operators are
 * Understand what conditionals are
 * Understand what nesting is
 * Understand what truthly and falsy values are
*/

// JS Datatypes
// Number -> Numerical values
let x = 10;

// String -> Textual data enclosed within single quotes or double
let str = "Hello, world!";

// Boolean -> Logicak value indicating true or false
let isTrue = true;

// Undefined -> Represnts a variable that has been declared but has not been assigned a value
let undefinedVar;

// Null -> Represents the intentional absense of any value or object
let nullValue = null;

// Object -> Represents a collection of key-value pairs or properties
let obj = {name: 'John', age: 30};

// Symbol -> Represents a unique and immutable data type that may be used as an identifier for object properties
let sym = Symbol('description');

/* Bigint -> Represents whole naumbers larger than the maximum safe integer defined by the Number type
 * It is created by appending 'n' to the end of an integer or by using 'BigInt() constructor
*/
let bigIntNum = 12345678909876543221n;
let bigIntNum2 = BigInt(12344322432);


/* Single, Double & Backticks
 *
 * Single Quotes ('') -> Used to denote strings
 * Double Quotes ("") -> Work similarly to single quotes for denoting strings
 * Backticks (``) -> Used to create template literals
 *                -> Template literals allow for easy interpolation of variables and multiline strings
 *                -> They support embedded expressions using `${...}` syntax allowing you to insert variables of expressions directly within the string
*/
// Example
const name =  'Alvin';
const greeting = `Hello ${name}`;
alert(greeting);


/* Conditional statements -> used to perform decisions
 * 
 * If -> specify a block of code to be executed, is a specified condition is true
 * else -> specify a block od code to be executed, if the same condition is false
 * else if -> specify a new condition to test, if the first condition is false
 * switch -> to specify many alternative blocks of code to be executed
*/

switch(expression) {
    case choice1: 
        // Run this code
        break;
    
    case choice2:
        // Run this code 
        break;
    
    case choice3:
        // Run his code;
        break;
    
    default:
        // Actually run this if choice is diff from the rest
        break;
}


/* Logical Operators
 *
 * Logical AND -> returns true if both operands are true
 * Logical OR -> returns true if atleast on of the operands is true
 * Logical NOT -> reverses the boolean value of the operand
*/

// Logical AND
const a = true;
const b = false;
console.log(a && b); // Output: false

// Logical OR
const c = true;
const d = false;
console.log(c || d); // Output: true

// Logical NOT
const f = true;
console.log(!f); // Output: false


/* Falsy vs Truthy
 * 
 * Falsy values -> Values that are considered false when evalusted in a booleancontext
 * JS has 6 of them: 'false', '0', `''`(empty string), 'null', 'undefined'
 * When any of this values are coerced to a boolea, they result in 'false'
 * 
 * Truthy values -> Values that are considered true when evaluated in a boolean context
 * All values in JS are truthy unless they are one of the falsy values mentioned above
 * examples are: non-empty strings, non zero numbers, objects, array, functions, etc
*/

// Falsy
if(0){
    console.log('This will not be executed')
}

// Truthy
if("Hello") {
    console.log('This will be executed')
}
