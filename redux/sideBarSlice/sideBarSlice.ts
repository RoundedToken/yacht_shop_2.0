import { TFavoritesFilter } from '../../models/types/TFavoritesFilter';
import { TCartListFilter } from '../../models/types/TCartListFilter';
import { TProductListFilter } from '../../models/types/TProductListFilter';
import { TListMode } from '../../models/types/TListMode';
import {
    ICartSorting,
    ICategorySorting,
    IFavoritesSorting,
    ISideBarState,
    IProductListSorting,
} from '../../models/interfaces/slices/ISideBarState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRoutes } from '../../models/enums/EConstants';

const initialState: ISideBarState = {
    //LIST_MODE
    listMode: 'grid',

    //FILTER
    productListFilters: {
        inStock: false,
    },
    cartListFilters: {
        inStock: false,
    },
    favoritesFilters: {
        inStock: false,
    },

    //SORTING
    favoritesSorting: { sortKey: 'name', sortType: 'ASC' },
    cartSorting: { sortKey: 'name', sortType: 'ASC' },
    categorySorting: { sortKey: 'name', sortType: 'ASC' },
    productListSorting: { sortKey: 'name', sortType: 'ASC' },

    //BRANDS
    brands: [],
    cartBrands: [],
    favoritesBrands: [],
};

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
        //LIST_MODE
        setListMode(state, action: PayloadAction<TListMode>) {
            state.listMode = action.payload;
        },

        //FILTER
        setProductListFilter(state, action: PayloadAction<{ filter: TProductListFilter; status: boolean }>) {
            state.productListFilters[action.payload.filter] = action.payload.status;
        },
        clearFilters(state, { payload }: PayloadAction<TRoutes>) {
            switch (payload) {
                case '/cart':
                    state.cartListFilters = { inStock: false };
                    break;
                case '/favorites':
                    state.favoritesFilters = { inStock: false };
                    break;
                default:
                    state.productListFilters = { inStock: false };
                    break;
            }
        },
        setCartListFilter(state, action: PayloadAction<{ filter: TCartListFilter; status: boolean }>) {
            state.cartListFilters[action.payload.filter] = action.payload.status;
        },
        setFavoritesFilter(state, action: PayloadAction<{ filter: TFavoritesFilter; status: boolean }>) {
            state.favoritesFilters[action.payload.filter] = action.payload.status;
        },

        //SORTING
        setCategorySorting(state, action: PayloadAction<ICategorySorting>) {
            state.categorySorting = action.payload;
        },
        setFavoritesSorting(state, action: PayloadAction<IFavoritesSorting>) {
            state.favoritesSorting = action.payload;
        },
        setCartSorting(state, action: PayloadAction<ICartSorting>) {
            state.cartSorting = action.payload;
        },
        setProductListSorting(state, action: PayloadAction<IProductListSorting>) {
            state.productListSorting = action.payload;
        },
        clearSorting(state) {
            state.favoritesSorting = { sortKey: 'name', sortType: 'ASC' };
            state.cartSorting = { sortKey: 'name', sortType: 'ASC' };
            state.categorySorting = { sortKey: 'name', sortType: 'ASC' };
            state.productListSorting = { sortKey: 'name', sortType: 'ASC' };
        },

        //BRANDS
        addBrand(state, { payload: { brand, location } }: PayloadAction<{ brand: string; location: TRoutes }>) {
            switch (location) {
                case '/favorites':
                    state.favoritesBrands.push(brand);
                    break;
                case '/cart':
                    state.cartBrands.push(brand);
                    break;
                default:
                    state.brands.push(brand);
                    break;
            }
        },

        removeBrand(state, { payload: { brand, location } }: PayloadAction<{ brand: string; location: TRoutes }>) {
            switch (location) {
                case '/favorites':
                    state.favoritesBrands.splice(state.favoritesBrands.indexOf(brand), 1);
                    break;
                case '/cart':
                    state.cartBrands.splice(state.cartBrands.indexOf(brand), 1);
                    break;
                default:
                    state.brands.splice(state.brands.indexOf(brand), 1);
                    break;
            }
        },

        clearBrands(state, { payload }: PayloadAction<TRoutes>) {
            switch (payload) {
                case '/favorites':
                    state.favoritesBrands = [];
                    break;
                case '/cart':
                    state.cartBrands = [];
                    break;
                default:
                    state.brands = [];
                    break;
            }
        },
        addCartBrand(state, action: PayloadAction<string>) {
            state.cartBrands.push(action.payload);
        },
        removeCartBrand(state, action: PayloadAction<string>) {
            state.cartBrands.splice(state.cartBrands.indexOf(action.payload), 1);
        },
        addFavoritesBrand(state, action: PayloadAction<string>) {
            state.favoritesBrands.push(action.payload);
        },
        removeFavoritesBrand(state, action: PayloadAction<string>) {
            state.favoritesBrands.splice(state.favoritesBrands.indexOf(action.payload), 1);
        },
    },
});

export const {
    clearFilters,
    setListMode,
    setProductListFilter,
    setCartListFilter,
    setFavoritesFilter,
    setCategorySorting,
    setCartSorting,
    setProductListSorting,
    setFavoritesSorting,
    clearSorting,
    addBrand,
    removeBrand,
    clearBrands,
    addCartBrand,
    removeCartBrand,
    addFavoritesBrand,
    removeFavoritesBrand,
} = sideBarSlice.actions;

export const sideBarSliceReducer = sideBarSlice.reducer;
