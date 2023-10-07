import { favoritesSliceReducer } from './favoritesSlice/favoritesSlice';
import { sideBarSliceReducer } from './sideBarSlice/sideBarSlice';
import { cartSliceReducer } from './cartSlice/cartSlice';
import { stylesSliceReducer } from './stylesSlice/stylesSlice';
import { modalSliceReducer } from './modalSlice/modalSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { navTreeApi } from './services/navTree';
import { navProductApi } from './services/navProductService';
import { webSearchApi } from './services/webSearch';
import { webCartProductList } from './services/webCartProductList';
import { navProductListApi } from './services/navProductListService';

export const reducer = combineReducers({
    [navTreeApi.reducerPath]: navTreeApi.reducer,
    [navProductApi.reducerPath]: navProductApi.reducer,
    [webSearchApi.reducerPath]: webSearchApi.reducer,
    [webCartProductList.reducerPath]: webCartProductList.reducer,
    [navProductListApi.reducerPath]: navProductListApi.reducer,
    modalSliceReducer,
    stylesSliceReducer,
    cartSliceReducer,
    sideBarSliceReducer,
    favoritesSliceReducer,
});

export type RootState = ReturnType<typeof reducer>;
