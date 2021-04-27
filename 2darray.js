// function hourglassSum(arr) {
//   let hourglasses = [];

//   for (let i = 0; i + 2 < arr.length; i++) {
//     hourglasses[i] = [];

//     for (let j = 0; j + 2 < arr[i].length; j++) {
//       hourglasses[i][j] = [];

//       for (let k = j, l = 0; k < j + 3, l < 3; k++, l++) {
//         hourglasses[i][j][l] = arr[i][k];
//         hourglasses[i][j][l + 1] = arr[i + 1][k - 1];

//         for (let h = 3; h-- > 0; ) {
//           hourglasses[i][j][l + 4 - h] = arr[i + 2][k - h];
//         }
//       }
//     }
//   }

//   let maxSum = null;

//   for (let i = 0; i < hourglasses.length; i++) {
//     for (let j = 0; j < hourglasses.length; j++) {
//       let sum = hourglasses[i][j].reduce((a, b) => a + b);
//       if (maxSum < sum || maxSum === null) {
//         maxSum = sum;
//       }
//     }
//   }

//   return maxSum;
// }

// console.log(hourglassSum([5,23,4,5,7,8,5,4,3,4,5,5,4,4,5]));

function minimumSwaps(arr) {
  let s = 0;

  for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];

    if (a == i + 1) continue;

    // Swap
    arr[i] = arr[a - 1];
    arr[a - 1] = a;

    ++s;
    --i;
  }

  return s;
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log(minimumSwaps([4, 3, 1, 2]));
console.log(minimumSwaps([2, 3, 4, 1, 5]));