//*We can modify existing JS built in methods using prototypal inheritance
//!Exercise - extend the functionality of a built in object

//!#1
//!Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date("1900-10-10").lastYear();
//!'1899'
//*Answers
//*Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function(){
  return this.getFullYear() - 1;
}

new Date('1900-10-10').lastYear()

//!#Bonus
//!Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map());
//!1🗺, 2🗺, 3🗺
//*Array.map() => to print '🗺'
Array.prototype.map = function () {
  // what happens with arrow function here?
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "🗺");
  }
  return arr;
};
console.log([1, 2, 3].map());
//!BONUS BONUS
//!Create your own bind() method using call or apply
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};

