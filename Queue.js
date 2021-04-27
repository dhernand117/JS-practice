//*It uses a First In First Out (FIFO) structure so the first node is the first thing to be processed
//*Big O of queues, O(1) for insertion and deletion, O(n) for searching and accessing
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //*This method will add a new node to the list
    enqueue(val){
        var newNode = new Node(val);
        //*if the list is empty
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            //*adding to when there are more than one node
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    //*This method will delete a node from the list
    dequeue(){
        //*Case when the list is empty
        if(!this.first) return null;
        var temp = this.first;
        //*If the list is only one node long
        if(this.first === this.last) {
            this.last = null;
        }
        //*If there are multiple nodes in the list
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}