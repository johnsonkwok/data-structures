var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  
  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    const newStorage = {};
    const firstKey = Object.keys(storage)[0];
    const firstVal = storage[firstKey];
    delete storage[firstKey];
    for (let key in storage) {
      newStorage[key - 1] = storage[key];
    }
    storage = newStorage;
    return firstVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
