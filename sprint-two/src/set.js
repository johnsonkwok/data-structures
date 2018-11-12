var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    let itemIdx = _.indexOf(this._storage, item);
    this._storage.splice(itemIdx, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * add: O(n) 
 * contains: O(n) 
 * remove: O(n) 
 * 
 */
