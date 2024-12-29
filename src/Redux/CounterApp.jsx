// Store: The single source of truth where the entire state of your application resides.
// Actions: Plain JavaScript objects that represent an intention to change the state. An action must have a type property.
// Reducers: Pure functions that take the current state and an action as arguments and return a new state.
// Dispatch: A method to send actions to the store.
// Selectors: Functions used to extract specific pieces of data from the store.
// Middleware: Used to extend Redux capabilities (e.g., for handling asynchronous logic like API calls).

// Calling an API Using Core Redux
// To handle asynchronous API calls, you'll need middleware like redux-thunk or redux-saga

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterApp = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

export default CounterApp;
