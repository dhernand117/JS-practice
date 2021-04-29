//*closures are one of the main pilars of JS
//? What are closures, they are a combination of functions and the lexical scope in which it was declared
//?In other words when we run a function that has functions inside those, when the first part runs the result of that is stored into the closure
//? so the nested functions have access to that result because they are stored in the memory heap as long as they are being referenced by a child function

function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return`${grandpa}>${father}>${son}`
        }
    }
}
//*this is a way to call a function that exists within a function
console.log(a()()())

const one = a()

const boo = (string) =>(name)=>(name2)=>console.log(`${string} ${name} ${name2}`);

boo('Whats up')('Alma')('Marcela')

//?Amin benefits of closures are, that is memory efficient and does encapsulation one of the pillars of OOP
//*Memory efficient because it lets us store the result of the function into a variable
function heavyDuty(index){
    const bigArray = new Array(7000).fill(Math.random()*1000)
    console.log('created!!');
    return console.log(bigArray[index]);
}

heavyDuty(799)
heavyDuty(800)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(810)
getHeavyDuty(500)

function heavyDuty2() {
  const bigArray = new Array(7000).fill(Math.random() * 1000);
  console.log("created again!!");
  return function(index) {
      return console.log(bigArray[index])
  }
}

//*Encapsulation means that some data from the function stored into a variable is not accessible directly because of closures
//*It is a way to add security to data inside functions

const makeNuklearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const launch = () => {timeWithoutDestruction = -1; return 'BOOOOOM';}
    const totalPeaceTime = () => timeWithoutDestruction;
    setInterval(passTime, 1000)
    return{
        totalPeaceTime: totalPeaceTime
    }

}

const ohNo = makeNuklearButton();
ohNo.totalPeaceTime()
ohNo.launch()

//!Closure exercice

//* Make it so that the initialize function can only be called once!

let view;
function initialize() {
    let called = 0;
    return function(){
        if (called > 0){
            return
        }else{
    called++
    console.log(called)
     view = '🏔';
     console.log('view has been set!');
     }
    }}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();

//*Function that will print all the numbers inside the array by index
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
   let count = array[i]
  setTimeout(function () {
    console.log("I am at index " + count);
  }, 3000);
}
//*This closure function is an inmediate called function that is wraped before it starts so the parameter it has inside is determined on the outside
//*in this case the parameter will be the (i) at the end of the wrap
for (var i = 0; i < array.length; i++) {
  (function(parameterI) {setTimeout(function () {
    console.log("Using closure I am at index " + array[parameterI]);
  }, 3000)
})(i)
}