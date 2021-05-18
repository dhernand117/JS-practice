//*Graph traversal is used generally in peer to peer networking, finding the closest match, shortest path problems like GPS navigation, AI etc.
//*Depth first traversal the idea is to visit the children first before we do the sibilings so we go down in the graph first
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
    //*This method will search recursively and add the results to the list, it takes tj=he starting point that has to be a vertex
    depthFirstRecursive(start){
        //*Variable where the vertices will be stored
        const result = [];
        //*Variable where we'll store the visited vertices
        const visited = {};
        const adjacencyList = this.adjacencyList;
        //*IIFE that will pass the 
        (function dfs(vertex){
            //*If the vertex is empty we will exit the function
            if(!vertex) return null;
            //*If the vertec is visited we will mark it as true
            visited[vertex] = true;
            //*Pushing the vertex into the result array
            result.push(vertex);
            //*For each neighbor in the vertex we will call recursively the dfs function until we get all the vertices into the results array
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

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
g.depthFirstRecursive("A")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

