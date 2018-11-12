
// Instantiate a new graph
var Graph = function() {
    this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.storage[node] = {
        value: node,
        edges: []
    };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if (this.storage[node]) {
        return true;
    } else {
        return false;
    }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    if (this.storage[node].edges.length) {
        var edgeArr = this.storage[node].edges;
        for (var i = 0; i < edgeArr.length; i++) {
            var edge = edgeArr[i];
            var edgeIdx = _.indexOf(this.storage[edge].edges, node);
            this.storage[edge].edges.splice(edgeIdx, 1);
        }
    }
    delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return _.contains(this.storage[fromNode].edges, toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.storage[fromNode].edges.push(toNode);
    this.storage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    var edgeIdx1 = _.indexOf(this.storage[fromNode].edges, toNode);
    var edgeIdx2 = _.indexOf(this.storage[toNode].edges, fromNode);
    this.storage[fromNode].edges.splice(edgeIdx1, 1);
    this.storage[toNode].edges.splice(edgeIdx2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (var key in this.storage) {
        cb(this.storage[key].value);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(1)
 * addEdge: O(1)
 * hasEdge: O(n)
 * removeEdge: O(1)
 * forEachNode: O(n)
 * 
 */


