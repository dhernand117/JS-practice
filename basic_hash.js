//*This basic hash function will take a string as a key and an array length and return an index position.
//*This basic hash is not constant time
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
console.log(hash('string', 10));
console.log(hash("orange", 10));