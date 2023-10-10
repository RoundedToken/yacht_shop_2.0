import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFavoritesState } from '../../models/interfaces/slices/IFavoritesState';

const initialState: IFavoritesState = {
    favoritesList: [],
    update: false,
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesListFromStorage(state) {
            state.favoritesList = JSON.parse(localStorage.favoritesList ?? '[]');
            state.update = localStorage.favoritesUpdate === 'true' ? true : false;
        },
        setFavoritesUpdateFromStorage(state) {
            state.update = JSON.parse(localStorage.favoritesUpdate ?? 'false');
        },
        addFavoritesItem(state, action: PayloadAction<number>) {
            state.favoritesList.push(action.payload);
            localStorage.favoritesList = JSON.stringify(state.favoritesList);
        },
        removeFavoritesItem(state, action: PayloadAction<number>) {
            state.favoritesList.splice(
                state.favoritesList.findIndex((id) => id === action.payload),
                1,
            );
            localStorage.favoritesList = JSON.stringify(state.favoritesList);
        },
        toTrueTheUpdate(state) {
            state.update = true;
            localStorage.favoritesUpdate = state.update;
        },
        toFalseTheUpdate(state) {
            state.update = false;
            localStorage.favoritesUpdate = state.update;
        },
    },
});

export const {
    addFavoritesItem,
    removeFavoritesItem,
    toTrueTheUpdate,
    toFalseTheUpdate,
    setFavoritesListFromStorage,
    setFavoritesUpdateFromStorage,
} = favoritesSlice.actions;

export const favoritesSliceReducer = favoritesSlice.reducer;
