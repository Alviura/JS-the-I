// JavaScript is a language used to make webpages interactive

/* Lesson Overview

 * How to declare a variable
 * What are three different ways to declare a variable?
 * Which one should you use when?
 * What are the rules for naming variables?
 * What are operators, operands, and operations?
 * What is concatenation and what happens when you add numbers and stings together?
 * What are the different types of operators in JavaScript?
 * What is the difference between == and ===
 * What are operator precedence values?
 * What are the increment/decrement operators?
 * What is the difference between prefixing and postfixing them?
 * What are assignemt operators?
 * What is the Unary Plus Operator?
 * 
*/

// Variable Declaration
let greeting;
var height;


// Variable Initialization
let message = "Hello";
var age = 25;
const PI = 3.14;

/* Rules for naming variables
 * 
 * Make names maximally descriptive and concise
 * Reserved words should not be used
 * variable names cannot start with a number
 * variables are case sensitive
 * variable names can start with _
 *
*/

/* Difference between == and ===
 * Both are relational operators
but == ignores the dataype of the variables while === checks it
*/

let b = 23;
let c = "23";

if (b==c){
    alert("true");
}
else{
    alert("false");
}

if (b===c){
    alert("true");
}
else{
    alert("false")
}

