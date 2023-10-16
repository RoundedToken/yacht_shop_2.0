import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

export const getFavoritesUpdate = (state: RootState) => state.favoritesSliceReducer.update;
export const getFavoritesList = (state: RootState) => state.favoritesSliceReducer.favoritesList;
export const getIsInFavorites = (id: number) => (state: RootState) => id in state.favoritesSliceReducer.favoritesList;

export const getFavoritesIdList = createSelector(getFavoritesList, (favorites) =>
    Object.keys(favorites).map((id) => +id),
);

export const getFavoritesBrands = createSelector(getFavoritesList, (favorites) =>
    Object.values(favorites).map((favorite) => favorite.brand),
);
