import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './entities';
import logger from '../middlewares/logger'
import func from '../middlewares/func'
import api from '../middlewares/api'

export default function configStore() {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger({ destination: "Console" }),
            api
        ]
    })
};