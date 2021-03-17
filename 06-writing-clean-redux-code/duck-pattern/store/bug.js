
// Action Types
const ADD_BUG = "ADD_BUG";
const REMOVE_BUG = "REMOVE_BUG";
const UPDATE_BUG = "UPDATE_BUG";



// Action Creators

let lastId = 0;
export const addBug = (bug) => {
    return {
        type: ADD_BUG,
        payload: {
            id: lastId++,
            description: bug,
            status: false
        }
    }
}

export const updateBug = id => {
    return {
        type: UPDATE_BUG,
        payload: {
            id,
            status: true
        }
    }
}
export const removeBug = id => {
    return {
        type: REMOVE_BUG,
        payload: {
            id
        }
    }
}

// Reducer


const initialState = {
    bugs: [],
    currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_BUG:
            return {
                ...state,
                bugs: [action.payload, ...state.bugs]
            }
        case REMOVE_BUG:
            return {
                ...state,
                bugs: state.bugs.filter(bug => bug.id !== action.payload.id)
            }
        case UPDATE_BUG:
            return {
                ...state,
                bugs: state.bugs.map(bug => bug.id === action.payload.id ? { ...bug, status: true } : bug)
            }
        default:
            return state
    }
}