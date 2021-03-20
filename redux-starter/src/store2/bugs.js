import { createSlice } from "@reduxjs/toolkit"


// reducer
let lastId = 1;
const slice = createSlice({
    name: "bugs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: lastId++,
                description: action.payload.description,
                resolved: false
            })
        },
        bugUpdated: (bugs, action) => {
            const bug = bugs.list.find(bug => bug.id === action.payload.id)
            bug.resolved = true
        },
        bugDeleted: (bugs, action) => {
            const index = bugs.list.findIndex(bug => bug.id === action.payload.id)
            bugs.list.splice(index, 1)
        }
    }
})

export default slice.reducer
export const { bugAdded, bugUpdated, bugDeleted } = slice.actions