import { favoritesSliceReducer } from './favoritesSlice/favoritesSlice';
import { sideBarSliceReducer } from './sideBarSlice/sideBarSlice';
import { navSliceReducer } from './navSlice/navSlice';
import { cartSliceReducer } from './cartSlice/cartSlice';
import { stylesSliceReducer } from './stylesSlice/stylesSlice';
import { modalSliceReducer } from './modalSlice/modalSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { navTreeApi } from './services/navTree';
import { navProductApi } from './services/navProductService';
import { webSearchApi } from './services/webSearch';
import { webCartProductList } from './services/webCartProductList';

export const reducer = combineReducers({
    [navTreeApi.reducerPath]: navTreeApi.reducer,
    [navProductApi.reducerPath]: navProductApi.reducer,
    [webSearchApi.reducerPath]: webSearchApi.reducer,
    [webCartProductList.reducerPath]: webCartProductList.reducer,
    modalSliceReducer,
    stylesSliceReducer,
    cartSliceReducer,
    navSliceReducer,
    sideBarSliceReducer,
    favoritesSliceReducer,
});

export type RootState = ReturnType<typeof reducer>;
