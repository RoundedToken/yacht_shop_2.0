import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFavoritesState, TFavorite } from '../../models/interfaces/slices/IFavoritesState';

const initialState: IFavoritesState = {
    favoritesList: {},
    update: false,
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesListFromStorage(state) {
            state.favoritesList = JSON.parse(localStorage.favoritesList ?? '{}');
            state.update = localStorage.favoritesUpdate === 'true' ? true : false;
        },

        setFavoritesUpdateFromStorage(state) {
            state.update = JSON.parse(localStorage.favoritesUpdate ?? 'false');
        },

        addFavoritesItem(state, { payload: { id, favorite } }: PayloadAction<{ id: number; favorite: TFavorite }>) {
            state.favoritesList[id] = favorite;

            //LOCAL STORAGE SAVE
            localStorage.favoritesList = JSON.stringify(state.favoritesList);
        },

        removeFavoritesItem(state, { payload }: PayloadAction<number>) {
            delete state.favoritesList[payload];

            //LOCAL STORAGE SAVE
            localStorage.favoritesList = JSON.stringify(state.favoritesList);
        },

        toTrueTheUpdate(state) {
            state.update = true;

            //LOCAL STORAGE SAVE
            localStorage.favoritesUpdate = state.update;
        },

        toFalseTheUpdate(state) {
            state.update = false;

            //LOCAL STORAGE SAVE
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
