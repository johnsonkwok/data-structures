var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newQueue = {};
  newQueue.storage = {};
  extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue: function() {
    const newStorage = {};
    const firstKey = Object.keys(this.storage)[0];
    const firstVal = this.storage[firstKey];
    delete this.storage[firstKey];
    for (let key in this.storage) {
      newStorage[key - 1] = this.storage[key];
    }
    this.storage = newStorage;
    return firstVal;
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

