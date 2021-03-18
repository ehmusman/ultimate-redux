import { configureStore } from '@reduxjs/toolkit';
import reducer from './entities';
import logger from '../middlewares/logger'

export default function configStore() {
    return configureStore({
        reducer,
        middleware: [logger]
    })
};