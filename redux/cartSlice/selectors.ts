import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export const getCartProductList = (state: RootState) => state.cartSliceReducer.productList;
export const getCartUpdate = (state: RootState) => state.cartSliceReducer.update;
export const getCartProductsCount = (state: RootState) => state.cartSliceReducer.productList.length;
export const getCartCopy = (state: RootState) => state.cartSliceReducer.productListCopy;
export const getCartResponse = (state: RootState) => state.cartSliceReducer.response;
export const getCartResponseIsLoading = (state: RootState) => state.cartSliceReducer.responseIsLoading;

export const getCartListBrands = createSelector(getCartProductList, (products) =>
    products.map((product) => product.brand),
);

export const getProductCount = (id: number) => (state: RootState) =>
    state.cartSliceReducer.productList.find((product) => product.id === id)?.count;

export const getCartTotalSum = createSelector(getCartProductList, (products) =>
    products.reduce((pV, cV) => pV + cV.count * cV.price, 0),
);

export const getCartIsCopy = createSelector(getCartCopy, (copy) => (copy.length === 0 ? false : true));

export const getCartIdList = createSelector(getCartProductList, (products) => products.map((product) => product.id));
