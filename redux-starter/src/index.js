import configStore from './store/configStore'

import { addBug, removeBug, updateBug } from './store/bug'

const store = configStore()
// console.log(store)

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

// create a bug
store.dispatch(addBug({ description: "Bug1" }))
store.dispatch(addBug({ description: "Bug2" }))
store.dispatch(addBug({ description: "Bug3" }))
store.dispatch(addBug({ description: "Bug4" }))
store.dispatch(addBug({ description: "Bug5" }))
store.dispatch(addBug({ description: "Bug6" }))


// update Bug
store.dispatch(updateBug({ id: 0, status: true }))
store.dispatch(updateBug({ id: 1, status: true }))
store.dispatch(updateBug({ id: 2, status: true }))
store.dispatch(updateBug({ id: 3, status: true }))
store.dispatch(updateBug({ id: 4, status: true }))
store.dispatch(updateBug({ id: 5, status: true }))

// remove Bug
store.dispatch(removeBug({ id: 0 }))
store.dispatch(removeBug({ id: 1 }))
store.dispatch(removeBug({ id: 2 }))
store.dispatch(removeBug({ id: 3 }))
store.dispatch(removeBug({ id: 4 }))
store.dispatch(removeBug({ id: 5 }))



