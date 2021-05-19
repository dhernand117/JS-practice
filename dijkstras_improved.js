//*Dijksta's (dikstra) algorithm was created to figure out the shortest path between 2 points in a weighted graph
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    //*The only difference from the unweighted graph is that we had to add the weight property for each vertex edge, so if a vertex connects to multiple vertices
    //*we will have to define the weight for each connection (a->b, a->c etc)
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    //*This algorithm takes a starting and ending vertex to find the shortest path
    Dijkstra(start, finish){
        //*New priority queue that will be used to sort the vertices by value
        const nodes = new PriorityQueue();
        //*Variable that will be an empty object that will add each vertex sorted byh priority
        const distances = {};
        //*Variable that will be an empty object and will take each key of every vertex in the adjacency list with a value of null
        const previous = {};
        let path = [] //*to return at the end
        let smallest;
        //*build up initial state
        for(let vertex in this.adjacencyList){
            //*Setting the starting vertex to have a value of cero
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            //*Setting each key to be every vertex in the adjacency list with a value of infinity
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            //*Each single node will have to be set to null initially and update as the queue updates
            previous[vertex] = null;
        }
        //* as long as there is something to visit
        while(nodes.values.length){
            //*Dequeue a vertex from the priority queue with the smallest value
            smallest = nodes.dequeue().val;
            //*If the vertex is the same as the ending vertex we are done!
            if(smallest === finish){
                //*Building up the path to return at the end (shortest path possible between our selected vertices)
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            //*If there are any more vertices to visit it will loop through each value in the adjacency list at that vertex
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //*finding neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //*calculating new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //*updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //*updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //*enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        //*Adding the initial vertex to the result(smallest) and reversing its order so it give us the path from point to point in the correct sequence
        return path.concat(smallest).reverse();     
    }
}
//*This priority queu class is needed to sort our vertexes by their value it has the same properties as the code from binary heaps
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

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E"));




