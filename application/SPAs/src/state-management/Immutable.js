class Immutable {
  constructor(data) {
    this.data = data;
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    const newData = { ...this.data };
    newData[key] = value;
    return new Immutable(newData);
  }

  update(updater) {
    const newData = updater(this.data);
    return new Immutable(newData);
  }
}

export default Immutable;