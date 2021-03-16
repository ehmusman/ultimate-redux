import store from './store'
import * as Actions from './actionTypes'
import { addBug, removeBug, updateBug } from './actions'

// console.log(store)

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

// create a bug
store.dispatch(addBug("Bug1"))
// unsubscribe()
// delete a bug
// store.dispatch(removeBug(1))

// update Bug
store.dispatch(updateBug(1))

// update a bug

// console.log(store.getState())
