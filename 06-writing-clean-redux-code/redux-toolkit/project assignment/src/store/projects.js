import { createSlice } from '@reduxjs/toolkit'


const state = []
let lastId = 0;

const slice = createSlice({
    name: "projects",
    initialState: state,
    reducers: {
        addProject: (projects, action) => {
            projects.push({
                id: lastId++,
                project: action.payload.project
            })
        },
        updateProject: (projects, action) => {
            let selectedProject = projects.find(project => project.id === action.payload.id)
            selectedProject.project = action.payload.project
        },
        removeProject: (projects, action) => {
            let index = projects.findIndex(project => project.id === action.payload.id)
            projects.splice(index, 1)
        }
    }
})

export default slice.reducer;
export const { addProject, updateProject, removeProject } = slice.actions
