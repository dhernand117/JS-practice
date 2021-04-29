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