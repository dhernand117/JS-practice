//*Classes are syntatic sugar to use prototypal inheritance in a different way introduced in ES6
//*The constructor runs every time the class gets instantiated by a new object
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}

const fiona = new Elf("Fiona", "ninja stars");
console.log(fiona instanceof Elf); //
const ben = new Elf("Ben", "bow");
fiona.attack();
