//*Idempotence means that multiple calls will display the same result
function notGood(num){
    return Math.random(num)
}
console.log(notGood(3));

function good(num){
    console.log(num);
}
good(3)