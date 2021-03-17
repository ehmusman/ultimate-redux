import { configureStore } from '@reduxjs/toolkit';
import reducer from './projects';
// import reducer from './bug';


export default function configStore() {
    return configureStore({ reducer })
};