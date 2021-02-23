'use strict';
//import { createStore } from 'redux'

const { createStore } = Redux; //we imported redux in our HTML file - now we are destructuring createStore from Redux after loading it in a script tag in the html

//Store!
const defaultState = {
    balance: 0
}

//Actions!
const actionIncrement = {
    type: 'increment'
}

const actionDecrement = {
    type: 'decrement'
}

//Reducer!!
const account = (state=defaultState, action) => {
    switch(action.type) {
        case 'increment':
            return {
                balance: state.balance + 1,
            };
        case 'decrement':
            return {
                balance: state.balance -1,
            }
        default:
            return state;
    }

}

//give us store methods (getState, dispatch, subscribe, replaceReducer)
const store = createStore(
    account, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //enables chrome devtools extension

store.subscribe(() => {
    console.log('subscribing to state changes');
    const state = store.getState();
    console.log("the state is:", state);
    const balance = document.querySelector('#balance');
    balance.innerHTML = state.balance;
});

const incrementButton = document.querySelector('#add');
const decrementButton = document.querySelector('#subtract');

incrementButton.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actionIncrement);
});

decrementButton.addEventListener('click', (e) => {
    e.preventDefault();
    store.dispatch(actionDecrement);
})

