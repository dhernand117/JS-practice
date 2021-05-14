//*Hash functions are defined by being fast in accessing and writing data
//*The way to handle collisions between data is by:
//*Separate chaining, meaning that at each index we use a more sophisticated data structure
//* (array, linked list) that can accept multiple key-value pairs at the same index
//*Linear Probing, we store 1 piece of data at a given index and if we find a collision we store it at the next empty slot
//*This will use single key-value data only
//?Big O fo hash tables is, for accesing, deleting and inserting O(1),in general or best case, this because of how the data distribution is handled

//*The constructor determines how big the hash table should be by default and we store that into an array 
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  //*The hash takes a key and will return a value for that key
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    //*This will return the random hashed key with the logic below
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  //*Set accepts a key and a value, hashes the key(store it in a position) in this case it is using nested chaining so an index can have more than one
  set(key, value) {
    //*this variable will hash the key giving it an index
    let index = this._hash(key);
    //*Checking if there is any data in that index
    if (!this.keyMap[index]) {
      //*If the index is empty it will be set to an empty array
      this.keyMap[index] = [];
    }
    //*This will push the setted data into the array with a key-value pair even if it is the same index
    this.keyMap[index].push([key, value]);
  }
  //*get works by accepting the key, then hashes the key and retriieves the key-value pair in the hash table, if its not found will return undefined
  get(key) {
    //*This variable will hash the key
    let index = this._hash(key);
    //*Checking if there is something at that index
    if (this.keyMap[index]) {
      //*If there is something at that index it will loop into the index
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //*If the key is equal the item inside the index array it will return the specific value that is stored at index of 1 [key, value]
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    //*If there is nothing at the index it will return undefined
    return undefined;
  }
  //*This method will loop through the hash table array and return all the keys in the table
  keys() {
    //*Variable that will store all the values
    let keysArr = [];
    //*Looping through the table and return all the keys that are stored at index 0 [key, value]
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //*Loop that will check and push only all the unique keys
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            //*Pushing all the keys into the empty array and returning them
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  //*This method will loop through the hash table array and return all the values in the table
  values() {
    //*Variable that will store all the values
    let valuesArr = [];
    //*Looping through the table and return all the values that are stored at index 1 [key, value]
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //*Loop that will check and push only all the unique values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            //*Pushing all the values into the empty array and returning them
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")

//*To acces or log all the values inside the hash table
ht.keys().forEach(function(key){
  console.log(ht.get(key));
})