import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { favoritesFilter } from '../helpers/favoritesFilter';
import { favoritesSort } from '../helpers/favoritesSort';
import { ITableFavoritesList } from '../interfaces/ITableFavoritesList';
import { getFavoritesFilters, getFavoritesSorting } from '../../../redux/sideBarSlice/selectors';
import { getCartProductList } from '../../../redux/cartSlice/selectors';

const FavoritesList: FC<ITableFavoritesList> = ({ styles, data, brands }) => {
    const cartList = useSelector(getCartProductList);
    const filters = useSelector(getFavoritesFilters);
    const filteredData = favoritesFilter(data, brands, filters);
    const sortRules = useSelector(getFavoritesSorting);
    const sortedData = favoritesSort(filteredData, sortRules);

    return (
        <div className={styles.favoritesList}>
            {sortedData.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    code={product.code}
                    price={product.price}
                    isDecimals={product.isDecimals}
                    count={cartList.find((cartProduct) => cartProduct.id === product.id)?.count as number}
                    inStock={product.inStock}
                    src={product.src}
                />
            ))}
        </div>
    );
};

export default FavoritesList;
