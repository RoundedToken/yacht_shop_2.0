/* Core */
import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { reducer } from './rootReducer';

export const reduxStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(middleware);
    },
    devTools: process.env.NODE_ENV !== 'production',
});
