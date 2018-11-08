var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = {};
  newStack.storage = {};
  extend(newStack, stackMethods);
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
  }
};

function extend(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
}

