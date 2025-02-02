import isImmutable from './isImmutable.js';

class Store {
    constructor(reducers, initialState = {}, middlewares = []) {
        if (typeof reducers !== 'function') {
            throw new Error('Reducers must be a function');
        }
        this.state = initialState;
        this.reducers = reducers;
        this.listeners = [];
        this.middlewareChain = middlewares;
    }
    
    getState() {
        return this.state;
    }
    
    dispatch(action) {
        this.middlewareChain.forEach((middleware) => {
            action = middleware(action);
        });
        this.state = this.reducers(this.state, action);
        this.notifyListeners();
    }
    
    updateState(newState) {
        if (!isImmutable(newState)) {
            throw new Error('State must be immutable');
        }
        this.state = newState;
        this.notifyListeners();
    }
    
    notifyListeners() {
        this.listeners.forEach((listener) => {
            listener();
        });
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
    }
    
    unsubscribe(listener) {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }
    
    resetState() {
        this.state = {};
        this.notifyListeners();
    }
    
    getStateSlice(sliceName) {
        return this.state[sliceName];
    }
    
    updateStateSlice(sliceName, newState) {
        this.state[sliceName] = newState;
        this.notifyListeners();
    }
    
    addMiddleware(middleware) {
        this.middlewareChain.push(middleware);
    }
}

export default Store;