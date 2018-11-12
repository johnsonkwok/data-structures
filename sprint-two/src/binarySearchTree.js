var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(BSTPrototype);
  binarySearchTree.value = value;
  return binarySearchTree;
};

var BSTPrototype = {};

BSTPrototype.insert = function(value) {
  var newBST = BinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
};

BSTPrototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

BSTPrototype.depthFirstLog = function(callback) {
  callback(this.value);
  for (var key in this) {
    if (this[key].value) {
      callback(this[key].value);
    } 
    if (this[key].right) {
      this[key].right.depthFirstLog(callback);
    } 
    if (this[key].left) {
      this[key].left.depthFirstLog(callback);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 * 
 */
