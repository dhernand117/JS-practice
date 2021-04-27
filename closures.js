//*closures are one of the main pilars of JS
//? What are closures, they are a combination of functions and the lexical scope in which it was declared
//?In other words when we run a function that has functions inside those when the first part runs the result of that is stored into the closure
//? so the nested functions have access to that result because they are stored in the memory heap as long as they are being referenced by a child function

function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return`${grandpa}>${father}>${son}`
        }
    }
}
//*this is a way to call a function that exists within a function
console.log(a()()())

const one = a()

const boo = (string) =>(name)=>(name2)=>console.log(`${string} ${name} ${name2}`);

boo('Whats up')('Alma')('Marcela')