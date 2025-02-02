// isImmutable.js
const isImmutable = (obj) => {
    if (typeof obj !== 'object') {
        return true;
    }
    
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (!isImmutable(obj[key])) {
                return false;
            }
        }
    }
    
    return true;
};




/*
// Example usage:
const store = new Store(combineReducers({
counter: (state = 0, action) => {
switch (action.type) {
case 'INCREMENT':
return state + 1;
case 'DECREMENT':
return state - 1;
default:
return state;
}
},
}));

const actions = new Actions(store);

const IncrementButton = connect(
(state) => ({ counter: state.counter }),
(dispatch) => ({ onClick: () => dispatch(actions.createAction('INCREMENT')) })
)(Button);

const DecrementButton = connect(
(state) => ({ counter: state.counter }),
(dispatch) => ({ onClick: () => dispatch(actions.createAction('DECREMENT')) })
)(Button);

const App = () => {
return (
<div>
<IncrementButton />
<DecrementButton />
<p>Counter: {store.getState().counter}</p>
</div>
);
};

store.addMiddleware(loggingMiddleware);
store.addMiddleware(thunkMiddleware);

render(<App />, document.getElementById('root'));
```
This code sets up a basic Redux-like state management system, with a store, actions, and connected components. It also includes some basic middleware for logging and handling thunk actions.
```
*/