//*factory function make/create
function createElf(name, weapon) {
  //*we can also have closures here to hide properties from being changed.
  return {
    //*When having tghe ssame properties in return we could simplify by just writing: name, weapon
    name: name,
    weapon: weapon,
    atack() {
      return "atack with " + weapon;
    },
  };
}
const sam = createElf("Sam", "bow");
const peter = createElf("Peter", "dick");

console.log(sam.atack());
console.log(peter.atack());

//*A more efficient way to write it would be with prototypal inheritance to add those properties to the objects

const elfFunctions = {
  attack: function () {
    return this.name + " atacks with " + this.weapon;
  },
};
function createElfV2(name, weapon) {
  //Object.create creates __proto__ link
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const Zam = createElfV2("Zam", "ZZZZaopppp");
const Peter = createElfV2("Peter", "bow");
console.log(Zam.attack());