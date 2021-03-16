import store from './store'

console.log(store)

// store.dispatch({
//     type: "bugAdded",
//     payload: {
//         id: Math.random() * 123456765432,
//         description: "Bug1",
//         resolved: false
//     }
// })
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 2086970775.3295555
    }
})

console.log(store.getState())
