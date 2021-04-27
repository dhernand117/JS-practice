function sumRange(num){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

sum = sumRange(4)
console.log(sum);
                  
                                   
                                