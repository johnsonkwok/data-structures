var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  const lastKey = this.size() - 1;
  const lastVal = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastVal;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
