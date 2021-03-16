

const initialState = {
    bugs: [],
    currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "bugAdded":
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