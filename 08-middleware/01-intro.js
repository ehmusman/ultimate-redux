// middleware is a building block that allows us to run side affects such as calling APIs

// what is a midleware?
// when we dispatching an action we are sending them through a single entry point from a pipeline. on the other side of this pipeline we have a reducer. when we dispatching an action it passes through it and reached at the reducer. this rootreducer passes this action to the all reducers. now in this pipeline we execute a function every time when an action is dispatched. this is called a middleware because this is setted inside this pipeline. so a middleware is a piece of code that runs every time when an action is dispatched and before reaching to the rootrreducer. there are many builtin middleware like
// calling APIs
// Error Reporting
// Analytics
// authorization