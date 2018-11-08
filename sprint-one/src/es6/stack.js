class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    const lastKey = this.size() - 1;
    const lastVal = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastVal;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}