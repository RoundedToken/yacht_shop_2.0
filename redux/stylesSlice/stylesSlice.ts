import { TDisplay } from './../../models/interfaces/slices/IStylesState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStylesState } from '../../models/interfaces/slices/IStylesState';
import { TRoutes } from '../../models/enums/EConstants';

const initialState: IStylesState = {
    modalDisplay: 'none',
    dropdownDisplay: 'none',
    brandsDisplay: 'none',
    cartBrandsDisplay: 'none',
    favoritesBrandsDisplay: 'none',
    filterDisplay: 'none',
    cartFilterDisplay: 'none',
    favoritesFilterDisplay: 'none',
    sortingDisplay: 'none',
    cartSortingDisplay: 'none',
    favoritesSortingDisplay: 'none',
    mobileModalDisplay: 'none',
};

export const stylesSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        offAllSideBar(state) {
            state.brandsDisplay = 'none';
        },
        switchModalDisplay(state) {
            state.modalDisplay = state.modalDisplay === 'none' ? 'block' : 'none';
        },
        switchDropdownDisplay(state) {
            state.dropdownDisplay = state.dropdownDisplay === 'none' ? 'block' : 'none';
        },
        switchBrandsDisplay(state, { payload }: PayloadAction<TRoutes>) {
            switch (payload) {
                case '/favorites':
                    state.favoritesBrandsDisplay = state.favoritesBrandsDisplay === 'none' ? 'block' : 'none';
                    break;
                case '/cart':
                    state.cartBrandsDisplay = state.cartBrandsDisplay === 'none' ? 'block' : 'none';
                    break;
                default:
                    state.brandsDisplay = state.brandsDisplay === 'none' ? 'block' : 'none';
                    break;
            }
            state.sortingDisplay = 'none';
            state.filterDisplay = 'none';
        },
        switchFilterDisplay(state) {
            state.filterDisplay = state.filterDisplay === 'none' ? 'block' : 'none';
            state.brandsDisplay = 'none';
            state.cartBrandsDisplay = 'none';
            state.favoritesBrandsDisplay = 'none';
            state.sortingDisplay = 'none';
        },
        switchSortingDisplay(state) {
            state.sortingDisplay = state.sortingDisplay === 'none' ? 'flex' : 'none';
            state.brandsDisplay = 'none';
            state.cartBrandsDisplay = 'none';
            state.favoritesBrandsDisplay = 'none';
            state.filterDisplay = 'none';
        },
        switchMobileModalDisplay(state) {
            state.mobileModalDisplay = state.mobileModalDisplay === 'none' ? 'block' : 'none';
        },
        setModalDisplay(state, { payload }: PayloadAction<TDisplay>) {
            state.modalDisplay = payload;
        },
    },
});

export const {
    switchModalDisplay,
    switchDropdownDisplay,
    switchBrandsDisplay,
    switchFilterDisplay,
    switchSortingDisplay,
    switchMobileModalDisplay,
    setModalDisplay,
} = stylesSlice.actions;

export const stylesSliceReducer = stylesSlice.reducer;
