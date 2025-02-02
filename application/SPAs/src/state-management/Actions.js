class Actions {
  constructor(store) {
    this.store = store;
  }

  dispatch(action) {
    this.store.dispatch(action);
  }

  createAction(type, payload) {
    return { type, payload };
  }

  updateValue(value) {
    return this.createAction('UPDATE_VALUE', value);
  }

  resetState() {
    return this.createAction('RESET_STATE');
  }
}

export default Actions;