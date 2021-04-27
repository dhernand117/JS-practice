//*Function that will take 2 arrays and match their values on every index and return the number of moves it took to do those changes
// let arr1 = [123, 543];
// let arr2 = [321, 279];

function minimumMoves(arr1, arr2) {

  let numMoves = 0;
  let num1 = "";
  let num2 = "";
  let digit1 = "";
  let digit2 = "";
  for (let i = 0; i < arr1.length; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    while (num1 != 0) {
      digit1 = num1 % 10;
      digit2 = num2 % 10;
      num1 = Math.trunc(num1 / 10);
      num2 = Math.trunc(num2 / 10);
      numMoves = numMoves + Math.abs(digit1 - digit2);
    }
  }
  return numMoves;
}


console.log(minimumMoves([23, 2], [321, 2]));

function arr(a1, a2) {
  let moves = 0;
  //write a test case for checking the lengths of 2 arrays to be matched
  if (a1.length !== a2.length) {
    return undefined;
  }
  let count = 0;
  while (count < a1.length) {
    while (a1[count] > 0 || a2[count] > 0) {
      if (a1[count] !== a2[count]) {
        let unitA1 = a1[count] % 10; //2
        let unitA2 = a2[count] % 10; //3
        moves = moves + Math.abs(unitA1 - unitA2);
      }
      if (
        (a1[count] === 0 && a2[count] > 0) ||
        (a1[count] > 0 && a2[count] === 0)
      ) {
        moves = moves + a2[count];
      }
      a1[count] = Math.floor(a1[count] / 10);
      a2[count] = Math.floor(a2[count] / 10);
    }
    count++;
  }
  return moves;
}
console.log(arr([122, 2], [53, 6]));