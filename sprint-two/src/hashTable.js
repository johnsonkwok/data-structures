

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  var includesKey = _.some(value, function(tuple) {
    return tuple[0] === k;
  });
  if (value === undefined) {
    var tuple = [];
    tuple.push([k, v]);
    this._storage.set(index, tuple);
  } else if (includesKey) {
    var currValIdx;
    _.each(value, function(tuple, i) {
      if (tuple[0] === k) {
        currValIdx = i;
      }
    });
    value.splice(currValIdx, 1);
    value.push([k, v]);
    this._storage.set(index, value);
  } else {
    value.push([k, v]);
    this._storage.set(index, value);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  var output;
  _.each(value, function(tuple) {
    if (tuple[0] === k) {
      output = tuple[1];
    }
  });
  return output;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  _.each(value, function(tuple, i) {
    if (tuple[0] === k) {
      value.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 * 
 */


