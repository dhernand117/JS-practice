const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);
console.log(a(), b(), c());
//*Pararell means that you execute all the calls at the same time
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}
parallel().then(console.log);
//*Race means that when one is successfull it ignores the rest of the promises
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}
//*Sequential means that you execute one afther the other
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
//*A new feature of ES2020 instead of Promise.all we have Promise.allSettled that will instead give us the status of the promise calls
