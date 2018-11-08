class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.size()] = value;
  }

  dequeue() {
    const newStorage = {};
    const firstKey = Object.keys(this.storage)[0];
    const firstVal = this.storage[firstKey];
    delete this.storage[firstKey];
    for (let key in this.storage) {
      newStorage[key - 1] = this.storage[key];
    }
    this.storage = newStorage;
    return firstVal;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
