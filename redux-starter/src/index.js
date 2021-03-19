import configStore from './store/configStore'
import { apiCallBegan, apiCallFailed, apiCallSuccess } from './store/api'

const store = configStore()

store.dispatch(apiCallBegan({
    url: '/bugs',
    onSuccess: 'bugsReceived',
    onError: 'apiRequestFailed'
}))