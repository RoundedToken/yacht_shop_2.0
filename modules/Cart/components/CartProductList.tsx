import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { cartListFilter } from '../helpers/cartListFilter';
import { cartSort } from '../helpers/cartSort';
import { ICartProductList } from '../interfaces/ICartProductList';
import {
    getCartListFilters,
    getCartSorting,
    getSelectedBrandsFromLocation,
} from '../../../redux/sideBarSlice/selectors';
import { toFalseCartUpdate } from '../../../redux/cartSlice/cartSlice';
import { useLocation } from '../../../hooks/useLocation';

const CartProductList: FC<ICartProductList> = ({ styles, productList, data }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const brands = useSelector(getSelectedBrandsFromLocation(location));
    const filters = useSelector(getCartListFilters);
    const filteredList = cartListFilter(productList, brands, filters, data);
    const sortRules = useSelector(getCartSorting);
    const sortedList = cartSort(filteredList, data, sortRules);

    useEffect(() => {
        dispatch(toFalseCartUpdate());
    }, [dispatch]);

    return (
        <div className={styles.cardProductList}>
            {sortedList.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={data.find((item) => item.id === product.id)?.name || ''}
                    src={data.find((item) => item.id === product.id)?.src || []}
                    price={product.price}
                    count={product.count}
                    brand={data.find((item) => item.id === product.id)?.brand || ''}
                    code={data.find((item) => item.id === product.id)?.code || ''}
                    isDecimals={data.find((item) => item.id === product.id)?.isDecimals || false}
                    inStock={data.find((item) => item.id === product.id)?.inStock || false}
                />
            ))}
        </div>
    );
};

export default CartProductList;
