import { RootState } from './../rootReducer';
import { createSelector } from '@reduxjs/toolkit';

export const getCategories = (state: RootState) => state.categoriesSliceReducer.categories;
export const getSearchProductList = (state: RootState) => state.categoriesSliceReducer.searchProductList;

export const getCategoriesBrands = (id?: number) =>
    createSelector(getCategories, (categories) => {
        if (categories && id !== undefined) {
            return categories[id].brands;
        } else {
            return [];
        }
    });

export const getSearchBrands = createSelector(getSearchProductList, (productList) => {
    if (productList) {
        return productList.map((product) => product.brand);
    } else {
        return [];
    }
});

export const getCategoryById = (id: number) =>
    createSelector(getCategories, (categories) => (categories ? categories[id] : undefined));
