var Stack = function() {
  let newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  pop: function() {
    const lastKey = Object.keys(this.storage).length - 1;
    const lastVal = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastVal;
  },
  size: function() {
    return Object.keys(this.storage).length;
  },
};


