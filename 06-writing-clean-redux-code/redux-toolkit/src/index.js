import configStore from './store/configStore'

import { bugAdded, bugRemoved, bugUpdated } from './store/bug'

const store = configStore()
// console.log(store)

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed", store.getState())
// })

// create a bug
store.dispatch(bugAdded({ description: "Bug1" }))
store.dispatch(bugAdded({ description: "Bug2" }))
store.dispatch(bugAdded({ description: "Bug3" }))
store.dispatch(bugAdded({ description: "Bug4" }))
store.dispatch(bugAdded({ description: "Bug5" }))
store.dispatch(bugAdded({ description: "Bug6" }))


// update Bug
store.dispatch(bugUpdated({ id: 0, status: true }))
store.dispatch(bugUpdated({ id: 1, status: true }))
store.dispatch(bugUpdated({ id: 2, status: true }))
store.dispatch(bugUpdated({ id: 3, status: true }))
store.dispatch(bugUpdated({ id: 4, status: true }))
store.dispatch(bugUpdated({ id: 5, status: true }))

// remove Bug
store.dispatch(bugRemoved({ id: 0 }))
store.dispatch(bugRemoved({ id: 1 }))
store.dispatch(bugRemoved({ id: 2 }))
store.dispatch(bugRemoved({ id: 3 }))
store.dispatch(bugRemoved({ id: 4 }))
store.dispatch(bugRemoved({ id: 5 }))



