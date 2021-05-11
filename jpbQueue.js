//*Job Queue was created with the introduction of promises in a way to manage the callback queue
//*It is called also the microtask queue, and what it does
setTimeout(() => {
  console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
  console.log("2", "can be as bad as one");
}, 10);

//2
Promise.resolve("hi").then((data) => console.log("2", data));

//3
console.log("3", "is a crowd");
