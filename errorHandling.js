//*Errors instances is a way to test code using the throw keyword
//throw new Error()
//*We can also store an error into a variable or function
const myError = new Error('hell yeah')
console.log(myError);
//*A way to catch errors we can use the catch keyword
//try{ }catch(err){}finally{run}
//*try catch blocks can be nested to catch errors in synchronous code
//*To catch asynchronous errors we use asyncAwait functions or promises and the use the .catch method on each promise call and .then argument
Promise.resolve('asyncfail')
.then(response => {
    throw new Error('failed')
}).catch(err => {console.log(err);})
//*Using async await with the try catch blocks in an IIFE
(async function() {
    try {
        await Promise.reject('oopsie')
    } catch (err) {
        console.error(err)
    }

    console.log('This is still good!')
})()

//*we can also use it in a class extending the error properties for different cases
class authenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.message = message;
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "PermissionError";
    this.message = message;
    this.favouriteSnack = "grapes";
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
    this.message = message;
  }
}

throw new PermissionError("A permission error");