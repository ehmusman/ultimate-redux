import configStore from './store/configStore'
import { loadBugs } from './store/bug'

const store = configStore()

store.dispatch(loadBugs())