//*This HOF can have access to other functions that will multiply a number by a defined number
const multiply = (number, fn) => {
    return fn(number)
}

function multiplyByTen(number){
    return number*10;
}
function multiplyByTwo(number){
    return number*2
}
function exponent2(number){
    return number*number
}

console.log(multiply(10, multiplyByTwo));

//*Another way to write a HOF
const multiplyBy = (num1) => (num2) => num1*num2;

const multiplyByFive = multiplyBy(5);