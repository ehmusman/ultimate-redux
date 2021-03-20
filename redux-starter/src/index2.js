import configStore from './store/configStore'
import { loadBugs, addBug } from './store/bug'

const store = configStore()

store.dispatch(loadBugs())
store.dispatch(addBug({ description: "new bugggg" }))

setTimeout(() => {
    store.dispatch(loadBugs())

}, 2000)