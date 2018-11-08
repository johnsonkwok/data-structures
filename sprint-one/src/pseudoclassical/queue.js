var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function() {
  const newStorage = {};
  const firstKey = Object.keys(this.storage)[0];
  const firstVal = this.storage[firstKey];
  delete this.storage[firstKey];
  for (let key in this.storage) {
    newStorage[key - 1] = this.storage[key];
  }
  this.storage = newStorage;
  return firstVal;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


