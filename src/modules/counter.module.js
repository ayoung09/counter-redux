//ACTION TYPES
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const RESET_COUNTER = 'RESET_COUNTER';
const SET_INCREMENT_VALUE = 'SET_INCREMENT_VALUE';

//ACTION CREATORS
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER,
});

export const resetCounter = () => ({
    type: RESET_COUNTER,
})

export const setIncrementValue = (value) => ({
    type: SET_INCREMENT_VALUE,
    value,
})

//INITIAL STATE
const initialState = { counter: 0, incrementValue: 1 };

//REDUCER
const reducer = (prevState = initialState, action) => {
    //because Redux state is immutable, we will first create the newState by creating a copy of prevState
    const newState = {...prevState};

    switch(action.type) {
        case INCREMENT_COUNTER:
            newState.counter = prevState.counter + newState.incrementValue;
            return newState;
        case DECREMENT_COUNTER:
            newState.counter = prevState.counter - newState.incrementValue;
            return newState;
        case RESET_COUNTER:
            newState.counter = 0;
            return newState;
        case SET_INCREMENT_VALUE:
            newState.incrementValue = action.value || prevState.incrementValue;
            return newState;
        default:
            return prevState;
    }
}

export default reducer;