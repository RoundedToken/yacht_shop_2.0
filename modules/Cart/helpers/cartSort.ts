import { IWebCartProductListRes } from './../../../models/interfaces/RTKQuery/IWebCartProductList';
import { ICartProduct } from '../../../models/interfaces/slices/ICartState';
import { ICartSorting } from '../../../models/interfaces/slices/ISideBarState';
import { sortByType } from '../../../utils/sortByType';

export function cartSort(cartList: ICartProduct[], data: IWebCartProductListRes[], sortRules: ICartSorting) {
    return cartList.slice().sort((a, b) => {
        const newA = data.find((item) => item.id === a.id) as IWebCartProductListRes;
        const newB = data.find((item) => item.id === b.id) as IWebCartProductListRes;
        const key = sortRules.sortKey;

        if (!newA || !newB) {
            return 0;
        }

        if (key === 'sum') {
            const numA = a.count * a.price;
            const numB = b.count * b.price;

            return sortByType(numA, numB, sortRules.sortType);
        } else if (key === 'brand') {
            return sortByType(newA.brand, newB.brand, sortRules.sortType);
        }

        return sortByType(newA.name, newB.name, sortRules.sortType);
    });
}
