//*Async Await is buit aroud promises and introduced in ES8 and it is syntax sugar for promises
//*The main difference is that makes code easier to read

async function playerStart(){
    const firstMove = await movePlayer(100, 'left');
    const second = await movePlayer(400, 'left');
    await movePlayer(10, 'right');
    await movePlayer(330, "left");
}

async function fetchUsers(){
const resp = fetch('https://jsonplaceholder.typicode.com/users')
const data = await resp.json();
console.log(data);
}

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
//*transforming our old promise based function into an async function
const getData = async function(){
try{
  const [users, post, albums] = await Promise.all(
  urls.map((url) => fetch(url).then((resp) => resp.json())
  ))
    console.log('users', users);
    console.log('post', post);
    console.log('albums', albums);
} catch (err) {
    console.log('oops', err);
}}
//* Also theres the "finally ()" that will always run at the end of any promise based function
//*It is great to run a pice of code that will run regardless if the promise was successfull or not

//*Another feature of ES8 is "for await of" that is another way to call asyncawait with a for of loop
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await( let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}