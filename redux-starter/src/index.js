import configStore from './store/configStore'

import { addBug, removeBug, updateBug } from './store/bug'

const store = configStore()
// console.log(store)

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

// create a bug
store.dispatch(addBug("Bug1"))
store.dispatch(addBug("Bug2"))
store.dispatch(addBug("Bug3"))
store.dispatch(addBug("Bug4"))
store.dispatch(addBug("Bug5"))
store.dispatch(addBug("Bug6"))


// delete a bug
// store.dispatch(removeBug(1))

// update Bug
store.dispatch(updateBug(0))
store.dispatch(updateBug(1))
store.dispatch(updateBug(2))
store.dispatch(updateBug(3))
store.dispatch(updateBug(4))
store.dispatch(updateBug(5))

// update a bug

// console.log(store.getState())
