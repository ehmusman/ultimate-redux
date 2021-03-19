import configStore from './store/configStore'

const store = configStore()

store.dispatch({
    type: 'apiCallBegan', // api request
    payload: {
        url: '/bugs',
        onSuccess: 'bugsReceived',
        onError: 'apiRequestFailed'
    }
})