//*Encapsulation means that code is wrapped into boxes in our case methods functions and properties
//*Abstraction is that we create instatiations of complex classes to enable functionality in child components
//*Inheritance in OOP means that som "children" functions or objects can have access to methods and functions of a parent class
//*Polimorphism means that we can call the same method on different objects and each different object using it can yield different results
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

//*using the extends keyword we can access the properties of the parent class (subclassing)
//*To have access to "this" from the superclass (parent) we use the "super" keyword to reference that object
class Elf extends Character { 
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon) 
    console.log('what am i?', this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() { // this is like extending our prototype.
    return 'strongest fort in the world made'
  }
}
//*Creating objects form the subclasses
const houseElf = new Elf('Dolby', 'cloth', 'house')
console.log(houseElf.attack());
console.log(Elf.prototype.isPrototypeOf(houseElf));
//!console.log(houseElf instanceOf Elf);
const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makeFort())
console.log(Ogre.prototype.makeFort());
//*Main difference with Java classes is that Java copy objects and methods when extending its functionality where JS just reference the space in memory of the object
//*As of ES2020 we have access to private and public classes or variables using the # sign but this is still at stage 3 proposal
//*https://github.com/tc39/proposal-private-methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
