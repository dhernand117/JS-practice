//*Type coercion means that the operands are different are converted to an equivalent value by the JS engine
//* ex. 1 == '1' is true but 1 === '1' is false
//*double == is a way to coerce values but to avoid this is best practice to use 3=
//*Object.is can be used to make total comparisons that are more accurate than 3=
//* https://dorey.github.io/JavaScript-Equality-Table/

//*Basic functions
//*Functions have access to special properties like call, apply and bind
function three () {
    return 3;
}
three.call();
//*using the object function to create a new function
const four = new Function('num', 'return num');
four()
//*Functions are a first class citizen inside JS meaning that we can asign variables to be functions
var stuff = function (){};
//*We can have functions inside functions
function a(fn){
    fn()
}
a(function(){console.log('hi there')})
//*We can use functions to return other functions and be assigned to variables
function b(){
    return function c() {console.log('bye bye');}
}
var d = b()
d()
//*Functions can have default parameters
function a (param=6){
    return param
}
a() //will return 6
a(25)//will return 25
//*Higher order functions are functions that can have a function as an argument or can return another function
//*Instead of having to copy the function multiple times we can pass the argument we need inside the parameters to avoid repeating ourselfs
function letLogin(user){
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push(i)        
    }
    return "Access granted to "+ user
}
letLogin();
//*we can also use arrow functions to run other functions with the specified data to keep it DRY
const giveAccess = (name) => 'access granted to '+ name
function Login(user) {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return giveAccess(user);
}
//*Example of Higher Order Function
function authenticate(verify){
      let array = [];
      for (let i = 0; i < verify; i++) {
        array.push(i);
      }
      return giveAccess(person.name)
}
function sing(person){
    return 'lalalala'+ person.name
}
function letPerson(person, fn){
    if (person.level === 'admin'){
        return fn(person)
    }else if (person.level === 'user'){
        return fn(person)
    }
    return giveAccess(person.name)
}
//*Here we can tell the function what data to use and what function to use
console.log(letPerson({level:'user', name:'Tom'}, sing))