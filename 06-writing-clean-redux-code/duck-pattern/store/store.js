import { createStore } from 'redux';
import reducer from './bug';
import { devToolsEnhancer } from 'redux-devtools-extension'


const store = createStore(reducer,
    devToolsEnhancer({ trace: true })
);

export default store;