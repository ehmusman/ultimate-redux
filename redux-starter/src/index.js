import configStore from './store2/configStore'
const store = configStore()
import { loadBugs, addBug, updateBug } from './store2/bugs'
// import { bugUpdated, bugAdded, bugDeleted } from './store2/bugs'
// import { projectAdded, projectDeleted, projectUpdated } from './store2/projects'

/// calling APIs
store.dispatch(loadBugs())

setTimeout(() => {
    store.dispatch(loadBugs())
}, 2000)

// add bug
store.dispatch(addBug({ description: "new bugggg" }))

// update Bug

store.dispatch(updateBug(1))














// // addBugs
// store.dispatch(bugAdded({ description: "bug 1" }))
// store.dispatch(bugAdded({ description: "bug 2" }))
// store.dispatch(bugAdded({ description: "bug 3" }))
// store.dispatch(bugAdded({ description: "bug 4" }))


// // updateBug

// store.dispatch(bugUpdated({ id: 1 }))
// store.dispatch(bugUpdated({ id: 2 }))

// // deleting bug

// store.dispatch(bugDeleted({ id: 1 }))
// store.dispatch(bugDeleted({ id: 4 }))


// ///// add a project
// store.dispatch(projectAdded({ name: "project1" }))
// store.dispatch(projectAdded({ name: "project2" }))
// store.dispatch(projectAdded({ name: "project3" }))
// store.dispatch(projectAdded({ name: "project4" }))


// // update name of project
// store.dispatch(projectUpdated({ id: 1, name: "project one new" }))
// store.dispatch(projectUpdated({ id: 2, name: "project two new" }))

// // delete a project
// store.dispatch(projectDeleted({ id: 1 }))
// store.dispatch(projectDeleted({ id: 4 }))


// console.log(store.getState())
