class Middleware {
    constructor(store) {
        this.store = store;
    }

    // middleware.js
    const loggingMiddleware = store => next => action => {
        console.log('Dispatching action:', action);
        const result = next(action);
        console.log('Next state:', store.getState());
        return result;
    };
    
    const thunkMiddleware = store => next => action => {
        if (typeof action === 'function') {
            return action(store.dispatch, store.getState);
        }
        return next(action);
    };
}
export default Middleware;