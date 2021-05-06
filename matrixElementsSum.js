let apartments = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

//function that will return the sum of the cost of the rooms given:
//free rooms and rooms below free rooms are out of the sum
//loop that iterates over the
function matrixElementsSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix[0].length; i++) {
     for(let j = 0; j < matrix.length; j++ ){
     if(matrix[j][i] === 0) break;
     sum+= matrix[j][i];        
     }
    }
    return sum;
}

console.log(matrixElementsSum(apartments));