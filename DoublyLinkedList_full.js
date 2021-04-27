//*The main difference with singly linked list is that every node has a prev and next value
//?The big O complexity of doubly linked list is:
//? Insertion O(1)
//? Removal O(1) 
//? Searching O(n) ** technically searching is O(n/2) but it translates to O(n)
//? Accessing O(n)
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //*This method will add a node to the list
    push(val){
        //*Variable that will create the new node with the value we pass
        var newNode = new Node(val);
        //*If the list is empty the first node will have the head and tail property
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            //*adding the new value to the list
            this.tail.next = newNode;
            //*connecting the new value backwards to the previous node
            newNode.prev = this.tail;
            //*setting the new value to become the new tail
            this.tail = newNode;
        }
        //*Increasing the length to reflect the changes
        this.length++;
        //*returning the new value of the list
        return this;
    } 
    //*This method will remove the last node from the list
    pop(){
        //*If there are no nodes it will return undefined
        if(!this.head) return undefined;
        //*This variable will store the value of the node that we're deleting
        var poppedNode = this.tail;
        //*If the list is 1 node long it will set the head and tail to null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        //*if there are many nodes in the list
        } else {
            //*Setting the tail to be the previous node
            this.tail = poppedNode.prev;
            //*This will sever the connection between the new tail from the previous tail
            this.tail.next = null;
            //*Severing the connection that went backwards from the tail to the previous node
            poppedNode.prev = null;
        }
        //*decreasing the length to reflect the changes
        this.length--;
        //*Returning the popped element
        return poppedNode;
    }
    //*This method will remove the first node
    shift(){
      //*If there are no nodes it will return undefined
      if (this.length === 0) return undefined;
      //*Variable to store the node we're deleting
      var oldHead = this.head;
      //*If the list is 1 item long it will set the head and tail to null
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        //*Making the next value from the head to be the new head
        this.head = oldHead.next;
        //*Severing the connection backwards to the next node
        this.head.prev = null;
        //*Severing the connection forwards from the node
        oldHead.next = null;
      }
      //*Decreasing the length by one
      this.length--;
      //*Returning the deleted node
      return oldHead;
    }
    //*This method will add a node to the beginning
    unshift(val){
        //*Variable that will create a new node
        var newNode = new Node(val);
        //*If the list is empty the new node will be the head and tail
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //*Adding the new node to the list and making the backwards connection
            this.head.prev = newNode;
            //*Creating the forward connection to the next node
            newNode.next = this.head;
            //*Setting the current value as the new head
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //*This method will get the value of a node
    get(index){
        //*If it the list is empty or looking for an unexisting node it will return null
        if(index < 0 || index >= this.length) return null;
        //*creating two empty variables
        var count, current;
        //*This will work with the left side thats why the length is divided by 2
        if(index <= this.length/2){
            //*Start the count at 0 from the head node
            count = 0;
            current = this.head;
            //*If the index is not found it will keep looping through the list
            while(count !== index){
                current = current.next;
                count++;
            }
            //*This is for the right side of the list
        } else {
          //*Starting the count at the end of the list on the tail node
          count = this.length - 1;
          current = this.tail;
          //*If the index is not found it will keep looping through the list
          while (count !== index) {
            current = current.prev;
            count--;
          }
        }
        //*Returning the found value of the node
        return current;
    }
    //*This method will change the value of a set node
    set(index, val){
        //*Variable using the get method to find the value
        var foundNode = this.get(index);
        //*When we find the value it will set the foundNode to the new value
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        //*If the node does not exist it will exit the method
        return false;
    }
    //*This will add a new node in any given position
    insert(index, val){
      //*If the list is empty it will return false
      if (index < 0 || index > this.length) return false;
      //*If the index is at the beginning it will add the value using the unshift method
      if (index === 0) return !!this.unshift(val);
      //*If the index is at the end it will add the value using the push method
      if (index === this.length) return !!this.push(val);
      //*Declaring 3 variables, newnode that will take the value we want to add
      var newNode = new Node(val);
      //* beforeNode that will get the element before the searched index
      var beforeNode = this.get(index - 1);
      //* afternode will be the value after the beforeNode
      var afterNode = beforeNode.next;
      //*This will make the connection from the prev node to the new node backwards and forwards
      (beforeNode.next = newNode), (newNode.prev = beforeNode);
      //*this will make the connection from the node that follows the new value backwards and forwards
      (newNode.next = afterNode), (afterNode.prev = newNode);
      this.length++;
      return true;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
