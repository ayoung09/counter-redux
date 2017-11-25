//CONSTANTS (i.e. ACTION TYPES)
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

//ACTIONS
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER,
});

//INITIAL STATE
const initialState = { counter: 0 };

//REDUCER
const reducer = (prevState = initialState, action) => {
    //because Redux state is immutable, we will first create the newState by creating a copy of prevState
    const newState = {...prevState};

    switch(action.type) {
        case INCREMENT_COUNTER:
            newState.counter = prevState.counter + 1;
            return newState;
        case DECREMENT_COUNTER:
            newState.counter = prevState.counter - 1;
            return newState;
        default:
            return prevState;
    }
}

export default reducer;