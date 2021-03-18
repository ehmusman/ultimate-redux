import { combineReducers } from 'redux'
import projectReducer from './projects'
import bugReducer from './bug'

export default combineReducers({
    bugs: bugReducer,
    projects: projectReducer
})