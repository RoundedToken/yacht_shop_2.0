import { categoriesSliceReducer } from './categoriesSlice/categoriesSlice';
import { crimpingSliceReducer } from './crimpingSlice/crimpingSlice';
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
import { webProductInfoApi } from './services/webProductInfo';
import { webRelatedProductsApi } from './services/webRelatedProducts';
import { webNewsApi } from './services/webNews';
import { webCrimpingApi } from './services/webCrimping';
import { webOrderApi } from './services/webOrder';

export const reducer = combineReducers({
    [navTreeApi.reducerPath]: navTreeApi.reducer,
    [navProductApi.reducerPath]: navProductApi.reducer,
    [webSearchApi.reducerPath]: webSearchApi.reducer,
    [webCartProductList.reducerPath]: webCartProductList.reducer,
    [navProductListApi.reducerPath]: navProductListApi.reducer,
    [webProductInfoApi.reducerPath]: webProductInfoApi.reducer,
    [webRelatedProductsApi.reducerPath]: webRelatedProductsApi.reducer,
    [webNewsApi.reducerPath]: webNewsApi.reducer,
    [webCrimpingApi.reducerPath]: webCrimpingApi.reducer,
    [webOrderApi.reducerPath]: webOrderApi.reducer,
    modalSliceReducer,
    stylesSliceReducer,
    cartSliceReducer,
    sideBarSliceReducer,
    favoritesSliceReducer,
    crimpingSliceReducer,
    categoriesSliceReducer,
});

export type RootState = ReturnType<typeof reducer>;
