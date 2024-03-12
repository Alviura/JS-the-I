/* Functions --> reusable block of code
 * Methods -> This are functions that are part of the object
 *
 * Built-in functions -> Known by the browser
 * Custom functions -> functions defined inside your code, not inside the browser
 * Anonymous functions -> functions with no names. More often they are seen when another function expects to receive another function as a parameter
 *                     -> The function parameter is often passed as an anonymous function
 * Arrow functions -> just like anonymous functions but => is used in place of function(event). this is wrtten (event) =>
 * 
 * Invoking functions -> Its just a fancy word for running / calling a function
 * 
 * Parameters -> These are the items listed between the parentheses in the function declaration
 *            -> Its more like just a placeholder for some future value
 * Arguments -> These are actual values that are passed to the function when invokedy
 */


function favoriteAnimal(animal){ //function declaration -> animal is the parameter
    return animal + "is my favorite animal"
}

console.log(favoriteAnimal('Goat')) //Goat is the argument, 
// Output -> Goat is my favorite animal


// Original way for writing the function
function logkey(event){
    console.log(`You pressed "${event.key}".`);
}
textBox.addEventListener("keydown", logkey);

// When using an Anonymous function 
textBox.addEventListener("keydown", function (event){
    console.log(`You pressed "${event.key}".`);
});

// When using Arrow functions
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
});

/* Return values -> values that a function returns when it is complete
 *
 * Some functions dont return any value. We list the return value as void or undefined
*/
function random(number){
    const result = Math.floor(Math.random())
    return result;
}
alert(result);

/*
 * 
 * The core client-side JavaScript language consists ofsome common programming features that allow you to do things like:
 * 
 * Store useful values inside variables.
 * Operations on pieces of text (known as "strings" in programming). 
 * Running code in response to certain events occurring on a web page. 
*/

// Parameters & Arguments
function showMessage(from, text){
    alert(from + ': ' + text);
}
showMessage('Ann', 'Hello!'); //Ann: Hello
showMessage('Alvin','wtf');

// Local variable -> A variable declared inside a function
function displayMessage(){
    let message = "Hello, I'm Javascript";
    alert(message);

}
showMessage(); // Hello , I'm Javascript!
alert(message); // Error! the variable is local to the function

// Outer variables: A function can access an outer variable as well
// an outer variable is only used if there's no local one
let userName = 'John';

function theMessage(){
    userName = 'Bob'; //Changed the outer variable

    let display = 'Hello, ' + userName;
    alert(display);
}

alert(userName) // John before the function call
theMessage()
alert(userName) //Bob, the value is modified by the function

// Default values -> when a function is called, but no argument is provided, then the corresponding value becomes undefined
showMessage("Ann"); // Ann: undefined

// we can set the default value to what we want
function isMessage(from, text = "no text given"){
    alert(from + ': ' + text);
}
isMessage("Anne"); // Ann: no text is given

function theMessage(from, text){
    if(text === undefined){
        text = 'message cannot be null';
    }
    alert(text = ': ' + text)
}
theMessage('Alvin'); // Alvin: message cannot be null

/* Returning a value
 * A function can return a value back into the calling code as the result
 * The directive return can be in any place of the functio. When the execution
 * reaches it, the function stops, and the valu is returned to the calling code (assigned to result above)
*/
function sum(a,b){
    return a + b
}
let result = sum(1, 2)
alert(result)

// If a function does not have a return value, it is the same as if it returns undefined
function doNothing(){
    return;
}
alert(doNothing() === undefined); //true


/* Naming a function
 * Functions are actions. So their name is usually a verb. It should be breif, as accurate as possible and
 * describe what the function does, so that someine reading the code gets an indication of what the function does.
 * It is a widespread practice to start a function with a verbal prefix whic vaguely describes the action.
 * There must be an agreement within the team on the meaning of the prefixes
 * 
 * Functions starting with...
 * "get.." -> returns a value
 * "calc.." -> calculate something
 * "create.." -> create something
 * "check.." -> check something and return a boolean