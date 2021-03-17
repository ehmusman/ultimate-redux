// console the store
// actualyy store is an object of different methods. and we are only interested in getState, subscribe, and dispatch. 
// in console we cannot access the state of sore. the only method to access the state is by calling getState() method. and to change the state only by calling dispatch() method.
// so we can say a state is private property in redux.


// what is private property? how will it works?

import reducer from '../redux-starter/src/reducer'

function createStore(reducer) {
    let state;
    let listeners = [];


    function subscribe(listener) {
        listener()
    }
    function getState() {
        return state
    }
    function dispatch(action) {
        // call the reducer to get the new state
        state = reducer(state, action)
        // notify the subscriber
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer)
// actually in create store there is variable called state. if we call the createStore function it will return an object. to make the state a private property we'll not expose it in the return object. because by doing this it will be easily mutable.
// to solve this we create a function getState() inside the createStore() function. we expose this getState() function inside the returning object and our state is returned in that newely created function. so we can only access the state by calling this getState() method.

// to mutate the state we create an other function called dispatch.it takes an argument called action. this function do two things. 
//1- call the reducer to get the new state
// 2- notify the subscriber
// but where is the reducer? we know when we create store we pass an argument called reducer.
// this reducer function takes two arguments, state and action
// reducer takes these two arguments and return a new state



// to notify the subscriber code is implemented