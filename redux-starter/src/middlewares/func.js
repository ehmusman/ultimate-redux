const func = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        action(dispatch, getState) // call this function
    } else {
        next(action)
    }
}
export default func