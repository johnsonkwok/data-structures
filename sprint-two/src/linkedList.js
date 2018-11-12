var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    };
  }

  list.removeHead = function() {
    var currHead = list.head.value;
    list.head = list.tail;
    return currHead;
  };

  list.contains = function(target) {
    let currNode = list.head;
    let contains = false;
    while (currNode !== null) {
      if (target === currNode.value) {
        contains = true;
      }
      currNode = currNode.next;
    }
    return contains;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 * 
 */