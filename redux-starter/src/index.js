import store from './store'

// console.log(store)

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})
store.dispatch({
    type: "bugAdded",
    payload: {
        id: 1,
        description: "Bug1",
        resolved: false
    }
})
unsubscribe()
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
})

console.log(store.getState())
