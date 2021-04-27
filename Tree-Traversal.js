//* These are the main 2 ways to traverse trees in general Breadht First and Depth First.
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
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    //*Breasth first search
    BFS(){
        //*Variable that will take the value of our visitec nodes
        var node = this.root,
        //*Empty array where we will store the visited values
            data = [],
        //*Empty array that will remember the values that are next depending on the order
            queue = [];
        queue.push(node);
        //*While there are elements inside the tree
        while(queue.length){
            //*This will remove the first item from the structure and continue
           node = queue.shift();
           //*This will add the removed item to the data array
           data.push(node.value);
           //*If there are elements to the left of the node it will be added to the queue array
           if(node.left) queue.push(node.left);
           //*If there are elements to the right of the node it will be added to the queue array
           if(node.right) queue.push(node.right);
        }
        //*At the end of the loop we will return the data array
        return data;
    }
    //*Depth First Pre-Order
    DFSPreOrder(){
        //*Variable that will store the values of the nodes visited
        var data = [];
        //*This helper function will traverse the nodes from a given node and check the right and left values
        function traverse(node){
          //*Pushing the value of the node to the variable that stores the values
          data.push(node.value);
          //*If the node has a left property it will call recursively the helper function on the left side
          if (node.left) traverse(node.left);
          //*If the node has a right property it will call recursively the helper function on the right side
          if (node.right) traverse(node.right);
        }
        //*Invoking the helper function with the current variable to start from, in this case it will start from the root
        traverse(this.root);
        //*Returning the array of values
        return data;
    }
    //*This method will visit first every node and then work backwards from the left most value
    DFSPostOrder(){
      //*Variable that will store the values of the nodes visited
      var data = [];
      //*Helper function that will take a node as an argument and work recursively on the left and right properties
      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        //*The value gets pushed after all the nodes have been visited
        data.push(node.value);
      }
      //*Calling the function from a starting point in this case the root
      traverse(this.root);
      //*Returning the newly created array that has all the data
      return data;
    }
    //*This method will traverse the left side first and then the node and in the end the right side so all the nodes will be
    //*Posted into the array in value order from min to max
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();



