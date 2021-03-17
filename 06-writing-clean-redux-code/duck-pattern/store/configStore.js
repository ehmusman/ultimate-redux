import { createStore } from 'redux';
import reducer from './bug';
import { devToolsEnhancer } from 'redux-devtools-extension'



export default function configStore() {
    const store = createStore(reducer,
        devToolsEnhancer({ trace: true })
    );
    return store
};