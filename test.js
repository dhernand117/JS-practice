function greeting (name, lastName, age) {
    console.log(`hello there ${name} ${lastName} you are this age ${age}`);
}

greeting('Santiago', 'Lopez', null)

function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log( bigBrother());
//*This function will return Hello World
const hello = (test) => {
  test = "Hello World ";
  return test;
};
console.log(hello());

//*This function will return one for +name, if there's no name provided name=you
const fer = (name='you') => {
  return `One for ${name}, one for me`
}
console.log(fer());

function makeArrayConsecutive2(statues) {
  for (let i = 0; i <= statues.length; i++) {
    let prev = i;
    let count = 0;
    if (prev === i++) {
      return;
    } else {
      count++;
    }
    return count;
  }
}