//*Compose is the idea that any sort of data transformation should be obvious
//* Arity means the number of parameters that a function takes in functional programing the ideal is to have no more than 2
//*with the idea of data --> fn --> data --> fn
// TODO an external JS library to use compose functionality is called Ramda

//! example fn1(fn2(fn3(50)));

//* compose(fn1, fn2, fn3)(50); //Right to lext
//*Pipe has the same principals of compose but the order of the operations is different
//* pipe(fn3, fn2, fn1)(50); //left to right

//?Another way of composing pure functions
// multiplyBY3 = (num) => num*3;
// makePositive = (num) => Math.abs(num);
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3AndAbsolute = compose((num) => num * 3, Math.abs);
console.log(multiplyBy3AndAbsolute(-50));

function doMath(object){
    return Object.assign({}, object, {})
}