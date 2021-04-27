//*Primitive
let num = 5;
let dual = true;
let string = 'a bunch of words';
let nada= undefined;
let emoji= Symbol;
let null1 = null;

//*Non primitive
let object = {};
//*Arrays are also objects
let arr = [];
let func= function empty(){};

console.log(typeof(nada));
//*Method to know if a JS object is an array
console.log(Array.isArray(arr));

//*Pass by value is when you asign directly a primitive type to a variable.

let a = 5;
let b = a;
b++;

//*Pass by reference is only for objects and when they are assigned to a different object it just changes places but has the same information
//*so when an object changes a property it's reflected in all its places in memory
let obj1 = {name:"name", password:'123'}
let obj2 = obj1;
obj2.name="OtherName"
console.log(obj1.name);

obj2.password='somethingelse';

//*To copy an object we can use this method or the spread operator
let clone = Object.assign({}, obj1);
let clone2 = {...obj1}
//*When cloning objects inside objects we have to access them in the clone too using the following method
let superClone = JSON.parse(JSON.stringify(myNestedObject));

//*Indirect obj assignment
const number = 100;
const string = "Jay";
let obj1 = {
  value: "a",
};
let obj2 = {
  value: "b",
};
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  number = number * 10;
  string = "Pete";
  obj1 = obj2;
  obj2.value = "c";
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number);
console.log(string);
console.log(obj1.value);