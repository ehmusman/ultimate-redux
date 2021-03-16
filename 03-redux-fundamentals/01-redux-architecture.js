// redux stores the application state inside a javascript object called store.
// this object is a single source of state for our application and it is accessible from all parts of UI.
// example of store in case of an ecommerace app
// {
//     categories: [], 
//     products: [], 
//     cart: {}, 
//     user: {}
// }
// we cannot modify or mutate this store because redux is build on the top of functional programming principles. in functional programming we cannot mutate state. we cannot code like this
// store.currentUser = {name: "Usman"}
// because our store is immutable object

// to update it we have to write a function. that takes the store as an argument. and returns the updated store. we can use spread operator to make a copy of it or we can use immutable libraries to do so. this function is called reducer. what thing has to be updated?
// to know this the reducer has a secong argument called action.

// our store may have multiple slices. each reducer is responsible for updating a specific slice of the store.

// there are three building blocks in redux application
//  Action(plain javascript objects also called event)       Store(javascript object that includes our application  state)        Reducer(to update the slice of the store may be called event handler)


// Action has a dispatch method this dispatch go to the store. we cannot directly call the reducer. store is an incharge of all. than store tells the reducer to do some predefined logical operation. reducer take a copy of store and make some changings in it. and it update the store. than updated store data shows to every UI component.
// this is a simple behaviour of redux.
// here dispatch is just an entry point to make every thing global



/////////////////////////////////////////////////////////////////////
// Your first redux app
// to create a redux app we have to follow the four steps.
// 1- Design a Store
// 2- Define the actions
// 3- Create one or more reducers
// 