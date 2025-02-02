class Model {
  constructor(data = {}) {
    this.data = data;
    this.listeners = new Set();
  }

  onChange(callback) {
    this.listeners.add(callback);
  }

  removeListener(callback) {
    this.listeners.delete(callback);
  }

  triggerChange() {
    if (this.debouncing) return;
    this.debouncing = true;
    setTimeout(() => {
      this.listeners.forEach(callback => callback(this.data));
      this.debouncing = false;
    }, 100); // Adjust the timeout value as needed
  }

  setData(newData) {
    this.data = { ...this.data, ...newData };
    this.triggerChange();
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.triggerChange();
  }
}

export default Model;