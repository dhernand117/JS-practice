//*Promise is an object that will return a resolved value in the future and has 3 states: resolved, pending, rejected
//*basic promise
const promise = new Promise((resolve, reject) => {
    if(true){
    resolve('Stuff worked');}{
    reject('Error it broke')}
})
//*Promise that run different results simulating different calls
promise
.then(result => result + '!')
.then(result2 => result2 + '?')
.catch(()=> console.log('error!!!'))
.then(result3 => {
 console.log(result3 + '!');
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiiii')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "SUPSUP");
});

Promise.all([promise, promise2, promise3])
.then(values => {
    console.log(values);
}) 

const urls = ['https://jsonplaceholder.typicode.com/users', "https://jsonplaceholder.typicode.com/posts", "https://jsonplaceholder.typicode.com/albums"]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2]);
}).catch(()=> console.log('Error'))