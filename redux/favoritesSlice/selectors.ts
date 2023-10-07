import { RootState } from '../rootReducer';

export const getFavoritesUpdate = (state: RootState) => state.favoritesSliceReducer.update;

export const getFavoritesIdList = (state: RootState) => state.favoritesSliceReducer.favoritesList;

export const getIsInFavorites = (id: number) => (state: RootState) =>
    state.favoritesSliceReducer.favoritesList.find((itemId) => itemId === id);
