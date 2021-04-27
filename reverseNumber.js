function reverseNumber(num) {
console.log(num)
let reverse = 0;
let remainder = 0;
while(num>0){
    console.log(num);
    remainder = num%10;
    console.log(remainder);
    reverse = (reverse *10) + remainder; 
    console.log(reverse);
    num = Math.floor(num/10);
}
}
console.log(reverseNumber(1234567));