
import { createSlice } from '@reduxjs/toolkit'

// Reducer

let lastId = 0;

const state = {
    bugs: []
}

// create slice, combination of both createActions and createReducer
const slice = createSlice({
    name: "bugs",
    initialState: state,
    reducers: {
        bugAdded: (state, action) => {
            state.bugs.push({
                id: lastId++,
                description: action.payload.description,
                status: false
            })
        },
        bugUpdated: (state, action) => {
            let bug = state.bugs.find(bug => bug.id === action.payload.id)
            bug.status = action.payload.status

        },
        bugRemoved: (state, action) => {
            const index = state.bugs.findIndex(bug => bug.id === action.payload.id)
            state.bugs.splice(index, 1)
        }
    }

})

export const { bugAdded, bugUpdated, bugRemoved } = slice.actions
export default slice.reducer
