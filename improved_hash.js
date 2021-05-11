//*This improved hash function will take a string as a key and an array length and return an index position.
//*this upgrades from the basic in becoming constant time of execution and more random numbers using Math.min
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
