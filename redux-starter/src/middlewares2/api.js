import axios from 'axios';
import { apiCallBegan, apiCallFailed, apiCallSuccess } from '../store2/api'


const api = ({ dispatch }) => next => async action => {
    if (action.type !== apiCallBegan.type) return next(action)

    const { url, method, data, onSuccess, onError, onStart, bugsReceived } = action.payload;
    if (onStart) dispatch({ type: onStart })
    if (bugsReceived) dispatch({ type: bugsReceived })
    next(action)
    try {
        const response = await axios.request({
            baseURL: 'http://localhost:9001/api',
            url,
            method,
            data
        })
        // general
        dispatch({ type: onSuccess, payload: response.data })
        // specific
        if (onSuccess) dispatch(apiCallSuccess(response.data))
    } catch (error) {
        // general
        dispatch({ type: onError, payload: error.message })
        // specific
        if (onError) dispatch(apiCallFailed(error.message))
    }
}
export default api;