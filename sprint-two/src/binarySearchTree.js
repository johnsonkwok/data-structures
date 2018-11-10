var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BSTPrototype);
//   binarySearchTree.left = {};
//   binarySearchTree.right = {};
  binarySearchTree.value = value;
  return binarySearchTree;
};

var BSTPrototype = {};

BSTPrototype.insert = function(value) {
  var newBST = BinarySearchTree(value);
  if (value < this.value) {
    this.left = newBST;
  } else if (value > this.value) {
    this.right = newBST;
  }
};

BSTPrototype.contains = function(value) {

};

BSTPrototype.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
