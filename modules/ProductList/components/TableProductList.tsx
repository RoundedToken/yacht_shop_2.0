import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { productListFilter } from '../helpers/productListFilter';
import { productListSort } from '../helpers/productListSort';
import { ITableProductList } from '../interfaces/ITableProductList';
import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';
import { getProductListFilters, getProductListSorting } from '../../../redux/sideBarSlice/selectors';
import { getCartProductList } from '../../../redux/cartSlice/selectors';
import { getFavoritesIdList } from '../../../redux/favoritesSlice/selectors';

const TableProductList: FC<ITableProductList> = ({ styles, productList, brands }) => {
    const filters = useSelector(getProductListFilters);
    const cartProductList = useSelector(getCartProductList);
    const favoritesIdList = useSelector(getFavoritesIdList);
    const filteredProductList = productListFilter(productList, brands, cartProductList, filters, favoritesIdList);
    const sortRules = useSelector(getProductListSorting);
    const sortedProductList = productListSort(filteredProductList, sortRules);

    return (
        <table className={styles.productList}>
            <ProductListHeader />

            <tbody>
                {sortedProductList.map((product) => (
                    <ProductListItem key={product.id} product={product} styles={styles} />
                ))}
            </tbody>
        </table>
    );
};

export default TableProductList;
