/* There's another very simple and concise syntax for creating functions, that's often better than function expressions
 * It's called arrow functions, because it looks like this
*/
let func = function(arg1, arg2) => sum = arg1 + arg2//expression;

// Arrow function can be used in the same way as Function Expressions. For instance, to dynamically create a function
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    () => alert('hello') :
    () => alert('greetings');
welcome();



