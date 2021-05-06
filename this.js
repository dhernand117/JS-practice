//*The magically dynamically scoped this keyword
//*Binding this with the new keyword
function Person(name, age){
    this.name = name;
    this.age = age;
}
const person = new Person('Diego', 1234)
console.log(person);

//*Implicit binding this
const person1 = {
    name: 'Karen',
    age: 40,
    karenRage(){
        console.log('I would like to speak to your manager' + this.name);
    }
}

//*Explicit binding this (it is using call, bind or apply) to specifically point the this keyword inside a function
const person2 = {
  name: "Marco",
  age: 31,
  hi: function delayedGreeting() {
    console.log("Hi" + this.setTimeout)
  }.bind(window)
};
console.log(person2.hi());

//*Arrow functions lexically scoped this
const person3 = {
    name: 'Arrow',
    age: 16,
    hi: function(){
        let inner = () =>{
            console.log('Hi my name is ' + this.name);
        }
        return inner
    }
}
console.log(person3.hi());