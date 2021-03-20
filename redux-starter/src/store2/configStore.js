import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from './entities'
import api from '../middlewares2/api'

export default function () {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            api
        ]
    })
}