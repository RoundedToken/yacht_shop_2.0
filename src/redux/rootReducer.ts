import { combineReducers } from '@reduxjs/toolkit';
import { langSliceReducer } from './langSlice/langSlice';
import { navTreeApi } from './services/navTree';

export const reducer = combineReducers({
    [navTreeApi.reducerPath]: navTreeApi.reducer,
    langSliceReducer,
});
