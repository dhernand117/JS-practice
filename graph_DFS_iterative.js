class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
//*With this method we traverse iteratively using our own stack instead of the call stack
//*This function accepts a starting node
    depthFirstIterative(start){
        //*Variable that will keep track of the vertices [list, array]
        const stack = [start];
        //*List that will store the end result
        const result = [];
        //*Object that will store the visited vertices
        const visited = {};
        let currentVertex;
        //*This will add the starting vertex to the stack and mark it as visited
        visited[start] = true;
        //*while there is something inside the stack
        while(stack.length){
            //*It will pop the vertex from the stack and store it into the result array that will be returned at the end
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                //*If the vertex hasn't been visited yet
               if(!visited[neighbor]){
                   //*It will mark it as visited
                   visited[neighbor] = true;
                   //*Push the neighbors into the stack
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

