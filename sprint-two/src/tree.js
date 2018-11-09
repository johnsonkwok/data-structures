var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree = Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  let found = false;

  var checkChild = function(node) {
    if (node.length !== 0) {
      for (var i = 0; i < node.length; i++) {
        if (node[i].value === target) {
          found = true;
        }
        checkChild(node[i].children);
      }
    }
  }
  
  checkChild(this.children);

  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
