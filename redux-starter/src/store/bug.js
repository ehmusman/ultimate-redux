
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from './api'

// Reducer

let lastId = 0;


// create slice, combination of both createActions and createReducer
const slice = createSlice({
    name: "bugs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null   // usefull if we want to use data from cache
    },
    reducers: {
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload
        },
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: lastId++,
                description: action.payload.description,
                status: false
            })
        },
        bugUpdated: (bugs, action) => {
            let bug = bugs.list.find(bug => bug.id === action.payload.id)
            bug.status = action.payload.status

        },
        bugRemoved: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list.splice(index, 1)
        }
    }

})


// Memoization
// bugs => get unresolved bugs from cache
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.status)
)

export const { bugAdded, bugsReceived, bugUpdated, bugRemoved } = slice.actions
export default slice.reducer

const url = '/bugs'
// Action Creator
export const loadBugs = () => apiCallBegan({
    url,
    onSuccess: bugsReceived.type
})