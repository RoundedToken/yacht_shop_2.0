import { IWebCartProductListRes } from './../../../models/interfaces/RTKQuery/IWebCartProductList';
import { ICartListFilters } from './../../../models/interfaces/slices/ISideBarState';
import { ICartProduct } from '../../../models/interfaces/slices/ICartState';

export function cartListFilter(
    cartList: ICartProduct[],
    brands: string[],
    filters: ICartListFilters,
    data: IWebCartProductListRes[],
) {
    const filteredList = brands.length === 0 ? cartList : cartList.filter((item) => brands.includes(item.brand));

    return filteredList.filter((product) => {
        const dataProduct = data.find((p) => product.id === p.id) as IWebCartProductListRes;

        if (filters.inStock) {
            return dataProduct.inStock !== false;
        }

        return true;
    });
}
