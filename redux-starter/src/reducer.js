import { ADD_BUG, REMOVE_BUG, UPDATE_BUG } from './actionTypes'

const initialState = {
    bugs: [],
    currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BUG:
            return {
                ...state,
                bugs: [action.payload, ...state.bugs]
            }
        case REMOVE_BUG:
            return {
                ...state,
                bugs: state.bugs.filter(bug => bug.id !== action.payload.id)
            }
        case UPDATE_BUG:
            return {
                ...state,
                bugs: state.bugs.map(bug => bug.id === action.payload.id ? { ...bug, status: true } : bug)
            }
        default:
            return state
    }
}