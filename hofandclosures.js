//*HOF that takes a function as a parameter and returns a function
const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});
//*Closure will wait the result of an inner function to finish the operation, however it is possible to modify the upper variable of the upper function
const closure = function () {
  let count = 55;
  return function getCounter() {
    return count;
  };
};

const getCounter = closure();
getCounter();
getCounter();
getCounter();
