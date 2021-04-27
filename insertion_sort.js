function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([1,2,3,4,5,7,9,6,8,11,10,12]));
console.log( insertionSort([2,1,9,76,4,99,101,2982,34,3,22]))