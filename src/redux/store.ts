/* Core */
import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { reducer } from './rootReducer';

export const reduxStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(middleware);
    },
});
