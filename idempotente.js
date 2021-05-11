//*Idempotence means that multiple calls will display the same result
function notGood(num){
    return Math.random(num)
}
console.log(notGood(3));
//*This is very common in hhtp requests because we need to retrieve always the same results to make our code predictable
//*Another perk of idempotence is the ability to call yourselv over and over and always have the same result without change
function good(num){
    console.log(num);
}
good(3)