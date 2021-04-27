    //?Fizzbuzz challenge in a function and as a standalone operation
    let arr = [];
    for (let i = 0; i < 100 ; i++) {
        if(i%3 === 0 && i%5 === 0) {
            arr.push("fizzbuzz")
        }else if(i%3 === 0) {
            arr.push("fizz")
        }else if (i%5 === 0) {
            arr.push("buzz")
        }else{
            arr.push(i)
        }
        return arr;
        }   




function fizzBuzz (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(15));
