var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail !== null) {
      list.head = list.tail;
      list.tail = Node(value);
    } else if (list.head === null) {
      list.tail = Node(value);
      list.head = list.tail;
    }
  // if (list.head === null) {
  //   list.tail = Node(value);
  //   list.head = list.tail;
  // } else {
  //   list.tail.next = Node(value);
  //   list.tail = ;
  };

  list.removeHead = function() {
    var currHead = list.head.value;
    list.head = list.tail;
    return currHead;
  };

  list.contains = function(target) {
    // while (target.next !== null) {
    
    // }
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
 */