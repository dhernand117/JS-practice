//*A pure function has to have no side effects, an input and an output
//*Side effects: means that it modifies objects outside of itself
const array = [1, 2, 3, 4, 5];
function mutateArray(arr) {
  arr.pop();
}
function mutateArray2(arr) {
  arr.forEach((item) => arr.push(1));
}

//*No side effects: It means that we are creating the changes inside the function
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray
}

function multiplyBy2(arr) {
  return arr.map(item => item*2)
}
//*Pure functions will always return the same result by referential transparency

//The order of the function calls will matter.
console.log(mutateArray(array));
console.log(mutateArray2(array));
console.log(removeLastItem(array));
console.log(multiplyBy2(array));
console.log(array);