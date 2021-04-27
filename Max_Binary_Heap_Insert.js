//*This Binary heap wil take the max values from the root and below in no specific order
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  //*This method adds an element into an array
  insert(element) {
    //*Adding the value to the empty array
    this.values.push(element);
    //*Using buubleUp method that will swap the biggest values to be on top
    this.bubbleUp();
  }
  //*Method that will sort the values swaping the biggest until they reach the correct position
  bubbleUp() {
    //*variable that will take the position at the end of the array
    let idx = this.values.length - 1;
    //*Variable that will take the values according to the position of idx that starts at the end of the array
    const element = this.values[idx];
    //*While the idx is not all the way to the begining
    while (idx > 0) {
      //*Variable that gives us the index of the parent with the formula (index-1)/2
      let parentIdx = Math.floor((idx - 1) / 2);
      //*Variable that will take the value of the found parent index
      let parent = this.values[parentIdx];
      //*If the element is smaller than the parent it will not run the loop
      if (element <= parent) break;
      //*Otherwise it will make a swap between the elements
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //*Updating the position of idx to compare the rest of the values
      idx = parentIdx;
    }
  }
  //*Method that will delete the root from the heap aka heap-down/sink-down and re-sort the rest of the values
  extractMax() {
    //*Take the root and replace it with the las item
    const max = this.values[0];
    //*this variable is taking off the value at the last index and storing it
    const end = this.values.pop();
    //*As long as there are more than 1 element in the DS it will run the code below
    if(this.values.length > 0){
    //*storing the pooped value as the new root
    this.values[0] = end;
    this.sinkDown();
    }
    return max;

  }
  //*This method will resort the rest of the values
  sinkDown() {
      //*Variable starting from cero
    let idx=0;
    //*Variable that takes the length of the DS
    const length = this.values.length;
    //*variable that takes the values of the root
    const element = this.values[0];
    while(true){
        //*Variable that will find the child at the left
        let leftChildIdx = 2*idx+1;
        //*Variable that will find the child at the right
        let rigthChildIdx = 2 * idx + 2;
        //*Empty variables for the right and left childs as well as swap
        let leftChild, rightChild;
        let swap = null;
        //*If the left index is greater than the lenght
        if(leftChildIdx < length){
            //*Leftchild will take the value of the left index
            leftChild = this.values[leftChildIdx];
            //*If the left child is greater than the value of the element it will swap the indexes and values
            if(leftChild > element){
                swap = leftChildIdx;
            }
        }
        //*If the right child index is less than the length
        if(rigthChildIdx < length){
            //*right child takes the value of the right index
            rightChild = this.values[rigthChildIdx];
            //*this conditional is to make sure that we're swaping with the right child
            if(
                //*Checking that swap is equal and that the right child is never larger than the leftchild value
                (swap === null && rightChild > element)|| 
                (swap !== null && rightChild > leftChild)
             ) {
                 //*else it will swap the value of the rightIndex
                swap = rigthChildIdx;
            }
        }
        //*If the swap is null it will break
        if(swap === null) break;
        //*Otherwise it will swap the values
        this.values[idx] = this.values[swap];
        this.values[swap]= element;
        //*Updating the position of the idx
        idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



