import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { productListFilter } from '../helpers/productListFilter';
import { productListSort } from '../helpers/productListSort';
import { ICardProductList } from '../interfaces/ICardProductList';
import { getProductListFilters, getProductListSorting } from '../../../redux/sideBarSlice/selectors';
import { getCartProductList } from '../../../redux/cartSlice/selectors';
import { getFavoritesIdList } from '../../../redux/favoritesSlice/selectors';
import ProductCard from '../../ProductCard/ProductCard';

const CardProductList: FC<ICardProductList> = ({ styles, productList, brands }) => {
    const filters = useSelector(getProductListFilters);
    const cartProductList = useSelector(getCartProductList);
    const favoritesIdList = useSelector(getFavoritesIdList);
    const filteredProductList = productListFilter(productList, brands, cartProductList, filters, favoritesIdList);
    const sortRules = useSelector(getProductListSorting);
    const sortedProductList = productListSort(filteredProductList, sortRules);

    return (
        <div className={styles.productListGrid}>
            {sortedProductList.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    code={product.code}
                    price={product.price}
                    count={cartProductList.find((cartProduct) => cartProduct.id === product.id)?.count as number}
                    inStock={product.inStock}
                    isDecimals={product.isDecimals}
                    src={product.src}
                />
            ))}
        </div>
    );
};

export default CardProductList;
