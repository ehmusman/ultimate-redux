// redux team officially recomended this toolkit to simplify the redux code.
// npm i @reduxjs/toolkit@1.2.5

// creating a store

// redux toolkit provides a bunch of utility functions to simplify the redux code. one of them is for creating the store
// redux toolkit also has a function to create a store.  it wraps the createStore of redux with some other development tool to make our job easier. like we dont have to add devTooleEnhancer from redux-devtools-extension
// an other benefit is that we'll be able to dispatch asynchronous actions like if we all external APIs/. if we dont use tool provided by redux tool kit than we have to use some middleware to do this.
// import {configureStore} from '@reduxjs-toolkit'

// const store = configureStore({
//  // we have to do some configuration
// 
// })



//////////////////////////////////////////////////////

// createAction

// import {createAction} from '@reduxjs-toolkit'

// const addBug = createAction("addBug")
// console.log(addBug)
// it will return a function, call it.


// console.log(addBug())
// it will return an object with properties type and payload. type will be same as written inside the parantheses of createAction().

// when we call it and if we add an object inside the parantheses it becomes the payload.
// console.log(addBug({id: 1}))
// { type: "addBug"
//      payload: {
    // id: 1
// }
// }

// now we dont need to ccreate constants and saperate action creators. pass the payload where we call these functions