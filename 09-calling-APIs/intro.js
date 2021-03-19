// as we know that the dispatch method should only contains a straightobject. we cannot add functions inside it. so to run the side effects we have to add thunk middleware. this middleware will alllow us to send a function and after some logic we have to dispatch a straight objectc that will next execute reducers to do its job.
// but the question is that where we can add the side effects? we can do this in action creators. 
// const actionCreator = () => dispatch => {
// we have to do three things here
// call an API (it will return a promise)
// Resolved: dispatch(Success)
// Rejected: dispatch(error)
// }
// namming conventions
// bugsRequested
// bugsReceived
// bugsRequestedFail
// or
// GET_BUGS_REQUEST
// GET_BUGS_SUCCESS
// GET_BUGS_FAIL

// NOW here is a problem we have to repeat these steps every time when we call an API. this problem can be solved by using a middleware

///////////////////////////////////////////////////////////////////
// actions are created


///////////////////////////////////////////////////////////////////
// restructuring the store
// bugs state is splitted to three slices
// name: "bugs",
// initialState: {
//     list: [],
//     loading: false,
//     lastFetch: null   // usefull if we want to use data from cache
// },

