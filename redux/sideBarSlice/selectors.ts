import { TRoutes } from './../../models/enums/EConstants';
import { createSelector } from '@reduxjs/toolkit';
import { TCartListFilter } from '../../models/types/TCartListFilter';
import { TFavoritesFilter } from '../../models/types/TFavoritesFilter';
import { TProductListFilter } from '../../models/types/TProductListFilter';
import { sortByBrands } from '../../utils/sortByBrands';
import { getCartListBrands } from '../cartSlice/selectors';
import { getCategoriesBrands, getSearchBrands } from '../categoriesSlice/selectors';
import { getFavoritesBrands } from '../favoritesSlice/selectors';
import { RootState } from '../rootReducer';

export const getSelectedBrands = (state: RootState) => state.sideBarSliceReducer.brands;
export const getCartSelectedBrands = (state: RootState) => state.sideBarSliceReducer.cartBrands;
export const getFavoritesSelectedBrands = (state: RootState) => state.sideBarSliceReducer.favoritesBrands;

export const getSelectedBrandsFromLocation = (location: TRoutes) =>
    createSelector(
        getSelectedBrands,
        getCartSelectedBrands,
        getFavoritesSelectedBrands,
        (selectedBrands, cartSelectedBrands, favoritesSelectedBrands) => {
            switch (location) {
                case '/cart':
                    return cartSelectedBrands;
                case '/favorites':
                    return favoritesSelectedBrands;
                default:
                    return selectedBrands;
            }
        },
    );

export const getSortedBrands = ({ id, location }: { id?: number; location: TRoutes }) =>
    createSelector(
        getCartListBrands,
        getFavoritesBrands,
        getSearchBrands,
        getCategoriesBrands(id),
        getSelectedBrandsFromLocation(location),
        (cartListBrands, favoritesBrands, searchBrands, categoriesBrands, selectedBrands) => {
            switch (location) {
                case '/cart':
                    return sortByBrands(cartListBrands, selectedBrands);
                case '/favorites':
                    return sortByBrands(favoritesBrands, selectedBrands);
                case '/search':
                    return sortByBrands(searchBrands ?? [], selectedBrands);
                default:
                    return sortByBrands(categoriesBrands, selectedBrands);
            }
        },
    );

export const getCartSorting = (state: RootState) => state.sideBarSliceReducer.cartSorting;

export const getCategorySorting = (state: RootState) => state.sideBarSliceReducer.categorySorting;

export const getFavoritesSorting = (state: RootState) => state.sideBarSliceReducer.favoritesSorting;

export const getProductListSorting = (state: RootState) => state.sideBarSliceReducer.productListSorting;

export const getListMode = (state: RootState) => state.sideBarSliceReducer.listMode;

export const getCartListFilters = (state: RootState) => state.sideBarSliceReducer.cartListFilters;

export const getIsCartFilterChecked = (value: TCartListFilter) => (state: RootState) =>
    state.sideBarSliceReducer.cartListFilters[value];

export const getFavoritesFilters = (state: RootState) => state.sideBarSliceReducer.favoritesFilters;

export const getIsFavoritesFilterChecked = (value: TFavoritesFilter) => (state: RootState) =>
    state.sideBarSliceReducer.favoritesFilters[value];

export const getProductListFilters = (state: RootState) => state.sideBarSliceReducer.productListFilters;

export const getIsProductListFilterChecked = (value: TProductListFilter) => (state: RootState) =>
    state.sideBarSliceReducer.productListFilters[value];
