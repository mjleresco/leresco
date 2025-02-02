class StateContainer {
  constructor(store, actions) {
    this.store = store;
    this.actions = actions;
  }

  getState() {
    return this.store.getState();
  }

  dispatch(action) {
    this.actions.dispatch(action);
  }

  resetState() {
    this.store.resetState();
  }

  getStateSlice(sliceName) {
    return this.store.getStateSlice(sliceName);
  }

  updateStateSlice(sliceName, newState) {
    this.store.updateStateSlice(sliceName, newState);
  }
}

export default StateContainer;