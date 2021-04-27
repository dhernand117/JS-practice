//* A single linked list is a collection of nodes that precede each other
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //*This method will push new values to the list it passes a value as an argument
    push(val){
        //*Declaring a new variable to be set as a new node that receives the value of the method
        var newNode = new Node(val);
        //*If the list has no elements this if statement will set the value to be the new head aand tail
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            //*This will run when there are more than 1 elements on the list
        } else {
            //*This will set the new tail to be equal to the value of newnode
            this.tail.next = newNode;
            //*This will set the value of the new tail to be the value that we just passed into the list
            this.tail = newNode;
        }
        //*At the end of the condition we will increase the lenght of the list by 1 and return this(that is the new whole value of the list)
        this.length++;
        return this;
    }
    //*This method will take the last element off the list
    pop(){
        //*If there is no head it will return undefined
        if(!this.head) return undefined;
        //*Declaring two variables, current that will be set to the last element and newTail that will take the preceding value of current
        var current = this.head;
        var newTail = current;
        //*This loop will check if there are next elements and it will set the newTail to the previous value of current, and current to the last element on the list
        while(current.next){
            newTail = current;
            current = current.next;
        }
        //*This will set the newTail as the last element and cut the relation with the last element by setting it to null
        //*and decreasing the length of the list by 1 to reflect the new lenght
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //*If the list is empty it will set the values of the head and tail to null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //*This will return the node at the end of the lists
        return current;
    }
    //*This method will take the first element off the list
    shift(){
        //*If there are no elements or theres no head it will return undefined
        if(!this.head) return undefined;
        //*Setting a variable that will take the value of the head
        var currentHead = this.head;
        //*Setting the head to be the next node on the list
        this.head = currentHead.next;
        //*Decreasing the length to reflect the change of the list
        this.length--;
        //*If the list is empty it will set the tail value to null
        if(this.length === 0){
            this.tail = null;
        }
        //*This will return the value of the new list
        return currentHead;
    }
    //*This method will add an element to the beginning of the list
    unshift(val){
        //*Declaring a variable that will be set to the new node
        var newNode = new Node(val);
        //*If there's no head (empty list) we will set the value (this.head = newNode) and the value to be the head and the tail
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
            //*Else will set the new value to be the new head (newNode.next = this.head)
            //*but first it will grab the second value and transfer it's head property to the new value
        }else{  
        newNode.next = this.head;
        }
        //*This will increment the value of the length by 1 and return the new list
        this.length++;
        return this;
    }
    //*This method will return the index of the searched value
    get(index){
        //*If the index is less than zero or greater or equal to the lenght of the list it eill return null
        if(index < 0 || index >= this.length) return null;
        //*Declaring two variables that will work as the counter for how many items we have traversed and
        //*another one that will return the value that we're searching for
        var counter = 0;
        var current = this.head;
        //*While the counter is not equal to the index, it will add 1 to counter and make current advance one position in the list
        while(counter !== index){
            current = current.next;
            counter++;
        }
        //*Returning the value of the node in tthe correct index
        return current;
    }
    //*This method will take 2 argumentd, 1 the position  of the node we want to update, 2 the value that will update the value of that node
    set(index, val){
        //*Declaring a variable that will use the get method above to find the position of the node we want to update
        var foundNode = this.get(index);
        //*IF the node is foud it will update with the new passed value
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        //*Otherwise if the node doesn't exist it will return false
        return false;
    }
    //*This method will take an index and a value and will insert a new node into the position we want it to be placed
    insert(index, val){
      //*If the index is less tahn zero or greater than the length it will return false
      if (index < 0 || index > this.length) return false;
      //*If the index is equal to the length of the list it will push a new node to the end of the list
      //! double !! means a boolean operator that will double negate the value so it will return true
      if (index === this.length) return !!this.push(val);
      //*If the index is 0 it will unshift a new node to the start of the list
      if (index === 0) return !!this.unshift(val);
      //*This variable will serve as a temprary placeholder of the new passed value
      var newNode = new Node(val);
      //*This variable will access the node at the index -1 using the get method
      var prev = this.get(index - 1);
      //*This variables will set the next property on the new node to be the previous next
      //*Using a temporary variable to store the current value of the node
      var temp = prev.next;
      //*Changing the .next value to be equal to our new node
      prev.next = newNode;
      //*Returning the value of temp to be the newnode.next value
      newNode.next = temp;
      //*This will increment the length of the list by one to reflect the change of inserting a new node
      this.length++;
      //*It will return true at the end to save the value
      return true;
    }
    //*This method will remove the value at the index we indicate
    remove(index){
        //*If the index is grater than zero or greater than the length it will return undefined
        if(index < 0 || index >= this.length) return undefined;
        //*If the index is equal to zero we will use the shift method
        if(index === 0) return this.shift();
        //*If the index is equal to the length -1 value of the list we will use the pop method
        if(index === this.length - 1) return this.pop();
        //*If the node is inside the list we will use the get method to access that value and store it in a variable
        var previousNode = this.get(index - 1);
        //*This variable will take the value of the previous node that we're trying to remove
        var removed = previousNode.next;
        //*This will set the previous and next values of the node we're removing to be sequential
        previousNode.next = removed.next;
        //*Decreasing the length of the list to reflect the change
        this.length--;
        //*Return the value of the node removed
        return removed;
    }
}

var list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)







