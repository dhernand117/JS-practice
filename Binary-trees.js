//*Trees are composed of nodes that have a parent/child relation in its structure
//*Binary Search trees excell at searching data stored inside the nodes, each node can have at most 2 children in BST
//? BIg O notation is, Insertion and Searching O(log n) on the average and best case
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    //*This method will add a node to the tree
    insert(value){
        var newNode = new Node(value);
        //*If the structure has no nodes it will create the new root
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        //*If the DS has nodes, we store the value of the root in a variable
        var current = this.root;
        //*This while will compare the values to store them in the right position
        while(true){
            //*If the value exists it will return undefined
            if(value === current.value) return undefined;
            //*If the value is less than the current value and the left side is empty it will store that value to the left of the node
            if(value < current.value){
                //*If there is nothing on the left we insert the newNode
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                //*If there is a value it will move to the next left value
                current = current.left;
            //*If the value is greater to the current value and the right side is empty it will store the value to the right of the node
            } else {
                //*If there is nothing on the right we insert the newNode
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                //*If there is a value to the right it will move to the next right value
                current = current.right;
            }
        }
    }

    //*This method will find the value of a node
    find(value){
        //*If the DS is empty will return false
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        //*While there is a root check the value of the node
        while(current && !found){
            //*If the value is less it will check to the left
            if(value < current.value){
                current = current.left;
                //*If the value is greater than the root it will check to the right
            } else if(value > current.value){
                current = current.right;
            } else {
                //*If the node is found it will return true
                found = true;
            }
        }
        //*If the value is not on the DS it will return undefined
        if(!found) return undefined;
        return current;
    }
    //*This method will look up if a value exists in the DS
    contains(value){
        //*If there are no nodes
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            //*If the value is smaller than current
            if(value < current.value){
                current = current.left;
            //*If the value is bigger than current
            } else if(value > current.value){
                current = current.right;
            } else {
                //*If the value exists it will return true
                return true;
            }
        }
        //*If the value is not on any node it will return false
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




