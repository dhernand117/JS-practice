//*Constructor Functions
//*We create constructor functions using the this keyword to use the properties into new objects using the "new" keyword
//*All constructor funcitons that create objects should have the first letter capitalized
//*The only way to add properties is using the this keyword
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}
//*Adding the attack method using the prototype property
//* In this case we are using the functionality of the this keyword being dinamically scoped so it goes up the object chain
//*to focus on the correct property, this would not happen if we use an arrow fn because it has a lexically scoped "this"
Elf.prototype.attack = function () {
  return "atack with " + this.weapon;
};
//*We can have functions inside the object but we would have to "bind" the this keyword to point at the object property
Elf.prototype.build = function () {
    //*Another way would be to store this into a variable ( const self = this;) and return the function at the end
    function building(){
        return this.name + ' builds a house';
    }
    //return building
    building.bind(this)
}
const sam = new Elf("Sam", "bow");
const peter = new Elf("Peter", "bow");
sam.attack();
