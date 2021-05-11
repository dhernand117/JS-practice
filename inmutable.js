//*Inmmutability means not changing the data or state maming copies of the state and returning the modified copy
//?This will mutate if we change obj.name
const obj = { name: "Andrei" };
function clone(obj) {
  return { ...obj }; // this is pure
}
//?This will not mutate the original object just creating a copy
function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);
//*Structural sharing is a way to call the copies of the objects and mutate those insted of changing the initial state.