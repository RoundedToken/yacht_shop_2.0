import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export const getCartProductList = (state: RootState) => state.cartSliceReducer.productList;

export const getCartProductsCount = (state: RootState) => state.cartSliceReducer.productList.length;

export const getCartListBrands = createSelector(getCartProductList, (products) =>
    products.map((product) => product.brand),
);

export const getProductCount = (id: number) => (state: RootState) =>
    state.cartSliceReducer.productList.find((product) => product.id === id)?.count;
