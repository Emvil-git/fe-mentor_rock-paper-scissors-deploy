import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameSlice from './slices/gameSlice';

const reducers = combineReducers({
    gameSlice
})

export const store = configureStore({
    reducer: reducers,
})