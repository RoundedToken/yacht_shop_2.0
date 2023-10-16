export interface IFavoritesState {
    favoritesList: TFavoriteList;
    update: boolean;
}

export type TFavoriteList = Record<number, TFavorite>;

export type TFavorite = {
    brand: string;
};
