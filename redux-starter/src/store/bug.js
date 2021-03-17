
import { createAction, createReducer } from '@reduxjs/toolkit'

// add createAction

export const bugAdded = createAction("bugAdded")
export const bugUpdated = createAction("bugUpdated")
export const bugRemoved = createAction("bugRemoved")


// Reducer

let lastId = 0;

const state = {
    bugs: []
}


export default createReducer(state, {
    [bugAdded.type]: (state, action) => {
        state.bugs.push({
            id: lastId++,
            description: action.payload.description,
            status: false
        })
    },
    [bugUpdated.type]: (state, action) => {
        let bug = state.bugs.find(bug => bug.id === action.payload.id)
        bug.status = action.payload.status

    },
    [bugRemoved.type]: (state, action) => {
        const index = state.bugs.findIndex(bug => bug.id === action.payload.id)
        state.bugs.splice(index, 1)
    }
})

