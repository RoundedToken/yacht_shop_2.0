import { TCartListFilter } from '../../models/types/TCartListFilter';
import { TFavoritesFilter } from '../../models/types/TFavoritesFilter';
import { TProductListFilter } from '../../models/types/TProductListFilter';
import { RootState } from '../rootReducer';

export const getBrands = (state: RootState) => state.sideBarSliceReducer.brands;

export const getCartBrands = (state: RootState) => state.sideBarSliceReducer.cartBrands;

export const getFavoritesBrands = (state: RootState) => state.sideBarSliceReducer.favoritesBrands;

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
