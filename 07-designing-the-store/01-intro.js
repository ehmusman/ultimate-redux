// Redux State vs Local State
// a common question is that should we put data in global state or in local state?
// there are two ways to organise state in redux application.
// if the data is consumed by multiple components than we have to use the global state because in this way we have only one copy of data globally
// for example in case of an ecomerace app we can store cart and user in the global state and all other things in local state. but in this way we are not getting the complete benefit of redux. we cannot do time travel debugging, caching, persistance etc in this case
// in react we can use contaxt objects to share the global data
// if we have to only share the data we have to drop the redux and use the context api in case of react. because its easy to implement

// another approach to organise that is to put every thing inside the store with this approach
// 1- we have single store to access unified data
// 2- cacheability  (if we have data in the store we dont have to fetch it again from the server)
// 3- easier debugging

// we should not use the redux in small applications. 
// in large complex applications we have to use the redux and use its every advantage. 


//. Exceptions FORM STATE
// we dont have to put the form state as global state
// because
//  1- temporary values
// 2- Too mant dispatches (may be 50 while writing the fullname)
// 3- Harder Debugging

// the more state we put in the store the more we can get out of the redux
// its not mean that we have to put every state in global

///////////////////////////////////////////////////////////////////////////////

// Structuring the redux store
// we'll discuss here how to structure the redux store
// [{},{},{}] array of objects
// this is a slow operation. because we have to loop through the array to find a specific bug
// its not mean that we have to always use the objects. objects give fast lookup but they didnt preserver the order

// {1:{id: 1},2:{id:2},3:{id:3}}
// id of bug is the value. by the help of this structure wecan look easily the bug by its id. this is a very fast operation
// to find a bug if there are 10 bugs or thousands bugs we need ssame amout of time to find a bug by its id


// ordered data needs an array, fast lookup need objects


// some time we may have more than one slices. we have to put them under the parent sliices in order to manage and maintainable
// like 
// {
//     entities: {
//         bugs: [],
//             projects: [],
//                 tags: []
//     },
//     auth: { userId: 1, name: "usman" },
//     ui: {
//         // store states specific to certain pages or components
//     }
// }
// in this way we have top level slices to manage the child slices by their functionalities

// by combining the reducers we create a hierarche of reducers
//


//////////////////////////////////////////////////////
// normalization

// an important topic is normalization of data. its just meaning is that the there should be no duplication of data in the store. because is may cause inconsistancy. we have to update the data at every place. also updating a nested objects is also a complex task at the end. so we have to avoid the nested structure. so we have to keep the data structure as flat as possible. so instead of nesting we have to use the id of that saperate block so that we canaccess it easily whenever we want


//normalizr is a library used to normalize the data. its easy to use 


////////////////////////////////////////////////
// selectors
// selectors are that function that takes a state and returned a computed state
// // in the bugs write the code
// export const getUnResolvedBugs = state => state.entities.bugs.filter(bug => !bug.status)

// // in index.js write 
// const unresolvedBugs = getUnResolvedBugs(store.getState())


/// this all is just like the queries in the mongodb case



///////////////////////////////////////////////////////////////
// Memoization

/// memoization is a technique to optimize the expensive functions
// the above implementation for getting unresolved bugs has a tiny problem. the problem is that the filter method returns an array every time when we call it.
// if we call this two time we'll get two different results. even the state is same the returned bugs are same. pher b answer false me aye ga. 
// const x = getUnResolvedBugs(store.getState())
// const y = getUnResolvedBugs(store.getState())
// console.log(x === y)   // answer is false. because two different arrays are returned but they have same values
// the reason is that there are two different memory locations are assigned to it. therefore the comparison is returning the false answer
// why there is a problem? we know in react when state changes the componentgs get rerenders. that is the problem with this filter method
// here is the logic is simple. what if the logic is complex? 
// we assume it needs 0.5 seconds to complete the logic. if the bugs are same no bugs are resolved same array will be returned. and component will be rerender. this is wher we can use memoization

// memoization is a technique for optimizing the expensive functions
// let we have a function that takes x and returns y
// f(x) => y   {input: 1, output: 2}
// we can build a cache of inputs and outputs
// if we send same input we'll get same output. in this case this output will be stores in the cache. so looping through the array and find the resolved bug and waiting 0.5 seconds and rerenders the component again and again is not a big problem now. we'll get the answer from cache. 