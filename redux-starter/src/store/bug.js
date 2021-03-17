
import { createAction } from '@reduxjs/toolkit'

// add createAction

export const addBug = createAction("BUG_ADDED")
export const updateBug = createAction("BUG_UPDATED")
export const removeBug = createAction("BUG_REMOVED")


// Reducer


const initialState = {
    bugs: []
}
let lastId = 0;


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case addBug.type:
            return {
                ...state,
                bugs: [{
                    id: lastId++,
                    description: action.payload.description,
                    status: false
                }, ...state.bugs]
            }
        case removeBug.type:
            return {
                ...state,
                bugs: state.bugs.filter(bug => bug.id !== action.payload.id)
            }
        case updateBug.type:
            return {
                ...state,
                bugs: state.bugs.map(bug => bug.id === action.payload.id ? { ...bug, status: true } : bug)
            }
        default:
            return state
    }
}