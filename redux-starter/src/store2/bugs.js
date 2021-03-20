import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api";
import moment from 'moment';

// reducer
const slice = createSlice({
    name: "bugs",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugsRequested: (bugs, action) => {
            bugs.loading = true
        },
        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false
        },
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload,
                bugs.lastFetch = Date.now()
            bugs.loading = false
        },
        bugAdded: (bugs, action) => {
            bugs.list.push(action.payload)
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
const { bugAdded, bugUpdated, bugDeleted, bugsReceived, bugsRequested, bugsRequestFailed } = slice.actions

const url = '/bugs'
export const loadBugs = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.bugs
    const diffInMinutes = moment().diff(moment(lastFetch), 'minute');
    // if (diffInMinutes < 10) return;

    dispatch(
        apiCallBegan({
            url,
            onStart: bugsRequested.type,
            onSuccess: bugsReceived.type,
            onError: bugsRequestFailed.type
        })
    )
}

export const addBug = (bug) => apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type
})

export const updateBug = id => apiCallBegan({
    url: url + '/' + id,
    method: "patch",
    data: { resolved: false },
    onSuccess: bugUpdated.type
})