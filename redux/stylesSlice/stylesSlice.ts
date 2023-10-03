import { createSlice } from '@reduxjs/toolkit';
import { IStylesState } from '../../models/interfaces/slices/IStylesState';

const initialState: IStylesState = {
    modalDisplay: 'none',
    dropdownDisplay: 'none',
    brandsDisplay: 'none',
    filterDisplay: 'none',
    sortingDisplay: 'none',
    mobileModalDisplay: 'none',
};

export const stylesSlice = createSlice({
    name: 'styles',
    initialState,
    reducers: {
        switchModalDisplay(state) {
            state.modalDisplay = state.modalDisplay === 'none' ? 'block' : 'none';
        },
        switchDropdownDisplay(state) {
            state.dropdownDisplay = state.dropdownDisplay === 'none' ? 'block' : 'none';
        },
        switchBrandsDisplay(state) {
            state.brandsDisplay = state.brandsDisplay === 'none' ? 'block' : 'none';
            state.filterDisplay = 'none';
            state.sortingDisplay = 'none';
        },
        switchFilterDisplay(state) {
            state.filterDisplay = state.filterDisplay === 'none' ? 'block' : 'none';
            state.brandsDisplay = 'none';
            state.sortingDisplay = 'none';
        },
        switchSortingDisplay(state) {
            state.sortingDisplay = state.sortingDisplay === 'none' ? 'flex' : 'none';
            state.brandsDisplay = 'none';
            state.filterDisplay = 'none';
        },
        switchMobileModalDisplay(state) {
            state.mobileModalDisplay = state.mobileModalDisplay === 'none' ? 'block' : 'none';
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
} = stylesSlice.actions;

export const stylesSliceReducer = stylesSlice.reducer;
