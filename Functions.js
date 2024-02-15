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




/*
 * 
 * The core client-side JavaScript language consists ofsome common programming features that allow you to do things like:
 * 
 * Store useful values inside variables.
 * Operations on pieces of text (known as "strings" in programming). 
 * Running code in response to certain events occurring on a web page. 
*/
