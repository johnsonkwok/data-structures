var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length]  = value;
  };

  someInstance.pop = function() {
    delete storage[Object.keys(storage).length];
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
