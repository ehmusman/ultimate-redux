import { createSlice } from '@reduxjs/toolkit'


const state = [];

let lastId = 0;

const slice = createSlice({
    name: "projects",
    initialState: state,
    reducers: {
        addProject: (state, action) => {
            state.push({
                id: lastId++,
                project: action.payload.project
            })
        },
        updateProject: (state, action) => {
            let selectedProject = state.find(project => project.id === action.payload.id)
            selectedProject.project = action.payload.project
        },
        removeProject: (state, action) => {
            let index = state.findIndex(project => project.id === action.payload.id)
            state.splice(index, 1)
        }
    }
})

export default slice.reducer;
export const { addProject, updateProject, removeProject } = slice.actions
