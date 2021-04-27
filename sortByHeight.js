//*Codesignal solution to sort by height
function sortByHeight(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] != -1 && array[j] != -1) {
        if (array[i] > array[j]) {
          let tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
  }

  return array;
}

console.log(sortByHeight([-1,-1,10,20,30,40,22,33,44,-1,-1,54,24,53,34,-1]));