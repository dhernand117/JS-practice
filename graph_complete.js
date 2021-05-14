//*Graphs are generally used for modeling data and users preferences. it is generally used by social networks, maps, file system optimizations etc
//*A graph is a DS that consists of a collection or set of nodes with a set of unordered/ordered pairs depending if the graph is undirected/directed,
//*The nodes can have multiple conections like a relational database because it is based in the clusters of data that not necesarilly have a direct relation
//*Graphs are composed of vetex(node) edge(connection) weighted/unweighted(values of the distances between vertices) directed/undirected(directions assigned to distanced between vertices)
//*The most common types of graphs are: Tree(single connection) Undirected(2 way connections) Directed(edges are represented with the direction to the next node can have 2 way connections)
//*Weighted(that each edge has a value to it) Unweighted(the edges do not have an assigned value) graphs can be a mixture of different types
//*There are 2 ways to store a graph Adjacency matrix(a structure that has nested arrays representing rows and columns(excel))
//*Adjacency List(it stores the edges(connection) to each vertex(node) so in a way it is a hash table that has a key-value pair relation that can use the same index)
//*Big O is faster for Adjacency matrix and is better for big data but it takes more space than it is for the list, list is generally faster adding nodes so it is faster for small sets and are generally more used in most applications

//*The main class for adjacency list will take an object that will store our edges
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    //*This method will add the vertices or nodes into the list accepting the name of a new vertex
    addVertex(vertex){
        //*This will add our key to the list with the name of the vertex and set its value to be an empty array, if the value already exists it won't do nothing
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    //*This method will accept 2 vertexes
    addEdge(v1,v2){
      //*This will find the value of the v1 and push it into v2 array to make the relationship
      this.adjacencyList[v1].push(v2);
      //*This will find the value of the v2 and push it into v1 array to make the relationship
      this.adjacencyList[v2].push(v1);
    }
    //*This method will remove the relation(edge) between vertices(nodes) it takes the 2 vertices
    removeEdge(vertex1,vertex2){
      //*Reassigning the key of vertex1 to a new array that does not have vertex2
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      //*Reassigning the key of vertex2 to a new array that does not have vertex1
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
    //*This method will remove the vertex and edges, it takes the vertex to be removed as a parameter
    removeVertex(vertex){
        //*This will loop through the array  while the vertex has any values in its array
        while(this.adjacencyList[vertex].length){
            //*Variable that will take the value of the vertex to be removed
            const adjacentVertex = this.adjacencyList[vertex].pop();
            //*This will remove the edges from any other vertices that have a relation with that vertex
            this.removeEdge(vertex, adjacentVertex);
        }
        //*Deleting the vertex from the list by the key
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
console.table(g);