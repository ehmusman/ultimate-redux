import store from './01-intro'
import * as actions from './actions'


store.dispatch(actions.bugAdded("Bug 1"))
console.log(store.getState())