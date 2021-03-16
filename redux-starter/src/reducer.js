

const initialState = {
    bugs: [],
    currentUser: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "begAdded":
            return {
                ...state,
                bugs: [action.payload, ...state.bugs]
            }
        case "bugRemoved":
            return {
                ...state,
                bugs: state.bugs.filter(bug => bug.id !== action.payload.id)
            }
        default:
            return state
    }
}