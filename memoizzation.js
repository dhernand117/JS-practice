//*Memoization is a way to store the results of the functions in memory so we dont have to run the calculations all over again
//*Making the code more efficient and fast to access 
function fib (n, memo=[undefined, 1,1]) {
    if (memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] =res;
    console.log(memo);
    return res;
}

console.log(fib(10))

//*learn to cache with memoization
//!not memoized
function addTo80(n) {
  return n + 80;
}

addTo80(5)
//!memoized
let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// console.log(2, memoizeAddTo80(6))

//* let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) { 
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6))