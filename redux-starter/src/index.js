import configStore from './store/configStore'

import { bugAdded, bugRemoved, bugUpdated, getUnresolvedBugs } from './store/bug'
import { addProject, updateProject, removeProject } from './store/projects'

const store = configStore()
// console.log(store)

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed", store.getState())
// })

// create a project
// store.dispatch(addProject({ project: "Project 1" }))
// store.dispatch(addProject({ project: "Project 2" }))
// store.dispatch(addProject({ project: "Project 3" }))


// // updateProject
// store.dispatch(updateProject({ id: 0, project: "new Project 1" }))
// store.dispatch(updateProject({ id: 1, project: "new Project 2" }))
// store.dispatch(updateProject({ id: 2, project: "new Project 3" }))

// delete project
// store.dispatch(removeProject({ id: 1 }))
// store.dispatch(removeProject({ id: 2 }))
// store.dispatch(removeProject({ id: 3 }))


// create a bug
store.dispatch(bugAdded({ description: "Bug1" }))
// store.dispatch(bugAdded({ description: "Bug2" }))
// store.dispatch(bugAdded({ description: "Bug3" }))


// update Bug
// store.dispatch(bugUpdated({ id: 0, status: true }))

// remove Bug
// store.dispatch(bugRemoved({ id: 0 }))


// selectors 
// get unresolved bugs
// const x = getUnresolvedBugs(store.getState())
// const y = getUnresolvedBugs(store.getState())
// console.log(x)
// console.log(y)
// console.log(x === y)


