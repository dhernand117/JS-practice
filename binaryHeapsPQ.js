//*This other variation of BH works as each element has a higher priority than the others and those with the highest priority get served first
//*HOw the nodes are compared is by priority instead of value

//? Big O of binary heaps is for insertion and removal o(log n) in all cases because all levels are filled up before going to tne next
//? For searching in a binary heap is O(n) that means it will grow depending on the number of nodes there are in the heap
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  //*This method will take a value and the priority level as argument
  enqueue(val, priority) {
    //*Variable that will create a new node with the given values
    let newNode = new Node(val, priority);
    //*Pushing the newly created node into the DS
    this.values.push(newNode);
    //*Using bubbleUp to push the highest priorities to the top
    this.bubbleUp();
  }
  //*Method that will re-arrange the nodes depending their priority
  bubbleUp() {
    //*Variable that takes the value of the last index
    let idx = this.values.length - 1;
    //*variable that takes the value of the index
    const element = this.values[idx];
    //*While idx is bigger than 0
    while (idx > 0) {
      //*variables that will take the index and value of the parent
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      //*if the priority of the element is bigger than the parent priority it wont run the loop
      if (element.priority >= parent.priority) break;
      //*Otherwise we will swap the values of the parent with the elements
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //*Updating the position of idx to start at the parent index
      idx = parentIdx;
    }
  }
  //*Method that removes the root element and re-arranges the heap using priority
  dequeue() {
    //*Variable that will take the value of the first element
    const min = this.values[0];
    //*variable that will take the index and value of the las element in the heap
    const end = this.values.pop();
    //*As long as the length is greater than 0  it will set the last element to be the root
    //*and then run the method sinkdown to re-arrange the nodes by priority
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    //*Returning the value of the new root
    return min;
  }
  sinkDown() {
    //*Variable starting from cero
    let idx = 0;
    //*Variable that takes the length of the DS
    const length = this.values.length;
    //*variable that takes the values of the root
    const element = this.values[0];
    while (true) {
      //*Variable that will find the child at the left
      let leftChildIdx = 2 * idx + 1;
      //*Variable that will find the child at the right
      let rigthChildIdx = 2 * idx + 2;
      //*Empty variables for the right and left childs as well as swap
      let leftChild, rightChild;
      let swap = null;
      //*If the left index is greater than the lenght
      if (leftChildIdx < length) {
        //*Leftchild will take the value of the left index
        leftChild = this.values[leftChildIdx];
        //*If the left child is greater than the value of the element it will swap the indexes and values
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      //*If the right child index is less than the length
      if (rigthChildIdx < length) {
        //*right child takes the value of the right index
        rightChild = this.values[rigthChildIdx];
        //*this conditional is to make sure that we're swaping with the right child
        if (
          //*Checking that swap is equal and that the right child is never larger than the leftchild value
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          //*else it will swap the value of the rightIndex
          swap = rigthChildIdx;
        }
      }
      //*If the swap is null it will break
      if (swap === null) break;
      //*Otherwise it will swap the values
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      //*Updating the position of the idx
      idx = swap;
    }
  }
}



let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)






