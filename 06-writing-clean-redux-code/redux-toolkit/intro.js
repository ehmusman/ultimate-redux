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