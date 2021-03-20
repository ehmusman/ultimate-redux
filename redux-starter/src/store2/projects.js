import { createSlice } from '@reduxjs/toolkit';

// reducer
let lastId = 1;
const slice = createSlice({
    name: "projects",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        projectAdded: (projects, action) => {
            projects.list.push({
                id: lastId++,
                name: action.payload.name
            })
        },
        projectUpdated: (projects, action) => {
            const project = projects.list.find(project => project.id === action.payload.id)
            project.name = action.payload.name
        },
        projectDeleted: (projects, action) => {
            const index = projects.list.findIndex(project => project.id === action.payload.id)
            projects.list.splice(index, 1)
        }
    }
})

export default slice.reducer;
export const { projectAdded, projectDeleted, projectUpdated } = slice.actions