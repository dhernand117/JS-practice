//* It has a LIFO (Last In First Out) structure where the las item is the first one that can be removed, it always adds to the top
//*Big O of stacks O(1) for insertion and deletion, O(n) for searching and accessing
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //*This method will add a value to the end of the stack
    push(val){
        var newNode = new Node(val);
        //*when the list is empty
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
        //*If there are more nodes in the list
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    //*This method will delete the last item from the list
    pop(){
        //*If there's no first node
        if(!this.first) return null;
        var temp = this.first;
        //*If the list is one node long
        if(this.first === this.last){
            this.last = null;
        }
        //*When there are multiple nodes it will update the first node
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}