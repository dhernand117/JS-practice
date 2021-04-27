function addUpTo (n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i ;       
    }
    return total;
}
console.log(addUpTo(3));

//*This code will take fewer time to run compared to the code above, this is because it has to run fewer operations
function addUpTon (n) {
    return n* (n+1) /2;
}
console.log(addUpTon(3));
//*This function will always print at least the value of 1 to 5
function loga5(n) {
    for (let i =0;  i <= Math.max(5,n); i++) {
        console.log(i);
    }
}
loga5(10);
//*Checking the number a letter appears inside a string
function charCount(str) {
  var result = {};
  for (var char of str) {
    char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
//*another way to do the same function above
// function charCount(str) {
//   var result = {};
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

console.log(charCount("hello world!!! 123"));
