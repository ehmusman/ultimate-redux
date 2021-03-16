import * as Actions from './actionTypes'

export const addBug = (bug) => {
    return {
        type: Actions.ADD_BUG,
        payload: {
            id: 1,
            description: bug,
            status: false
        }
    }
}

export const updateBug = id => {
    return {
        type: Actions.UPDATE_BUG,
        payload: {
            id,
            status: true
        }
    }
}
export const removeBug = id => {
    return {
        type: Actions.REMOVE_BUG,
        payload: {
            id
        }
    }
}