//*Prototypal inheritance means that an object has access of properties and methods of another object
//*This is semi-exclussive to JS as c++ and Java use clasical inheritance
//*This is useful because we can have objects that point at the same point in memory so it is very efficient instead of copying the same functionality on multiple objects

//*way to access the object in the upper chain to access its methods and properties in the browser
const obj1 = {};
obj1.__proto__


//!Example of prototypal inheritance

let dragon = {
    name: 'Dannierys',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
        return `I am ${this.name}, the breather of fire`
        }
    },
    walk(){
        return `I am ${this.name} and can walk`
    }
}

console.log(dragon.sing());

let lizard = {
    name: 'Lizardo',
    fight(){
        return 1
    }
}
//*This way we are binding an existing method of another object to a different object
 const walkLizard = dragon.walk.bind(lizard)
 console.log(walkLizard())

 //*For prototypal inheritance we would have to do it the following way to point at the object we want altough if we have same predefined properties on the 2nd object
 //*those will take precedence before the ones of the object we're taking the functions and methods from
 //*In a way __proto__ is just a pointer to the prototype object that also works in arrays and functions and that is why arr and fn are objects in JS
 lizard.__proto__=dragon;
 console.log(lizard.fire);
 //*Way to log the particular properties declared inside lizard
 for (let prop in lizard){
     if(lizard.hasOwnProperty(prop)){
     console.log(prop);
     }
 }
 //*Way to confirm if lizard is a prototype of dragon meaning if lizard inherits from dragon
 console.log(dragon.isPrototypeOf(lizard));

 //?Fun fact difference between null and undefined is that undefined is that the value is not found, null means there is absolutely nothing there

 //* Create our own prototypes:
var human = {mortal: true}
var socrates = Object.create(human);
console.log(socrates.mortal);
human.isPrototypeOf(socrates); // true
//*Another thing to remember is that only constructor functions have the prototype property (Function.prototype), everything else has access through __proto__
//*That is why typeOf(Object) will return a function and the reason why Object.prototype can run and it is the base object inside the DOM