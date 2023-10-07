import { RootState } from '../rootReducer';

export const getFavoritesUpdate = (state: RootState) => state.favoritesSliceReducer.update;

export const getFavoritesIdList = (state: RootState) => state.favoritesSliceReducer.favoritesList;
