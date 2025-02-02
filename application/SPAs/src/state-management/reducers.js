const combineReducers = (reducers) => {
    if (typeof reducers !== 'object') {
        throw new Error('Reducers must be an object');
    }
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
        }, {});
    };
};

export default combineReducers;