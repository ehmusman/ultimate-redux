import axios from 'axios';
import { apiCallBegan, apiCallFailed, apiCallSuccess } from '../store/api'

const api = ({ dispatch }) => next => async action => {
    if (action.type !== apiCallBegan.type) return next(action)
    next(action)
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
        const response = await axios.request({
            baseURL: "http://localhost:9001/api",
            url,
            method,
            data
        })
        // general
        dispatch(apiCallSuccess(response.data))
        // specific
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
    } catch (error) {
        // general
        dispatch(apiCallFailed(error))
        // specific
        if (onError) dispatch({ type: onError, payload: error })
    }
}
export default api;