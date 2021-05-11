//*Modules are created by the same principle that code have to be separated in a way that can make our programs scalable
//*It solves the problem of mutating data that is probably needed in other functions or classes

var harry = "potter";
var voldemort = "He who must not be named";
function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

console.log(fight(harry, voldemort)); 

//*The module pattern is to organize code according to its global then module and funciton scope but also the blosck scope
//*An example of a module pattern is an IIFE (inmediatly Instantiated function expression )
var myModule = (function(){
//Do something here
})()//Calling the function that return the inner functions or variables
//*The benefits of the module pattern is that is great for mainteanability because everything is condensed into their own variables unnafecting the global scope
//*also this makes our code reusable for other compoenets.
//*We can also use Asyncronous model definition with module pattern to avoid rewriting the module variables that will mess with the functionality
//*Common JS and browserify webpack are libraries that can be used to bundle modules to convert our code to become Asyncrhonous
//*Because you can now use JS in not only the browser ES6 introduced import/export to work with modular code in javascript