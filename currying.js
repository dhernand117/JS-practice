//*currying is a function that takes a parameter at a time and waits for the inner function to be done to return the result
//*this way we can create utility functions

//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)
//*Utility function with a fixed parameter
const multiplyBy5 = curriedMultiply(5)
console.log(multiplyBy5(20));

//*Partial Application: means that we apply just a part of the funtion similar to currying
//*This will pass the rest of the parameters on the second pass of the function
const partialMultiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = partialMultiply.bind(null, 5)
console.log(partialMultiplyBy5(4, 10));