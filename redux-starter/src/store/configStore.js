import { configureStore } from '@reduxjs/toolkit';
import reducer from './entities';


export default function configStore() {
    return configureStore({ reducer })
};