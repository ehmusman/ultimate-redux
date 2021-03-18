import configStore from './store/configStore'

import { bugAdded, bugRemoved, bugUpdated, getUnresolvedBugs } from './store/bug'
// import { addProject, updateProject, removeProject } from './store/projects'

const store = configStore()
// console.log(store)

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed", store.getState())
// })

// create a project
// store.dispatch(addProject({ project: "Project 1" }))

// // updateProject
// store.dispatch(updateProject({ id: 0, project: "new Project 1" }))

// delete project
// store.dispatch(removeProject({ id: 1 }))


// create a bug
// store.dispatch(bugAdded({ description: "Bug1" }))
store.dispatch((dispatch, getState) => {
    dispatch({ type: "bugsReceived", bugs: [1, 2, 3] })
    console.log(getState())
})


// update Bug
// store.dispatch(bugUpdated({ id: 0, status: true }))

// remove Bug
// store.dispatch(bugRemoved({ id: 0 }))
