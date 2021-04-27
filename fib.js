//*This function will return the value of iteration of the fibbonacci sequence
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibonnacci(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;
  if (num === 3) return 2;
  if (num === 4) return 3;
  return fib(num - 2) + fib(num - 1);
}
console.log(fibonnacci(5));

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811

function fibonacci(n) {
  let result = [];
  result[0] = 0;
  result[1] = 1;
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  console.log(result);
  return result;
}
function fibonacci1(n) {
  let result = [];
  result[0] = 0;
  result[1] = 1;

  result = [...fibonacci(n - 1)];
  console.log(result);
  return result;
}
fibonacci(5);