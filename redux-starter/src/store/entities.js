import { combineReducers } from 'redux';

import entitiesReducer from './rootReducer'

export default combineReducers({
    entities: entitiesReducer
})