import { IFavoritesSorting } from '../../../models/interfaces/slices/ISideBarState';
import { IWebCartProductListRes } from '../../../models/interfaces/RTKQuery/IWebCartProductList';
import { sortByType } from '../../../utils/sortByType';

export function favoritesSort(favoritesList: IWebCartProductListRes[], sortRules: IFavoritesSorting) {
    return favoritesList.slice().sort((a, b) => {
        return sortByType(a[sortRules.sortKey], b[sortRules.sortKey], sortRules.sortType);
    });
}
