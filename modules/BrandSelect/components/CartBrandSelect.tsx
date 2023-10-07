import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sortByBrands } from '../helpers/sortByBrands';
import { ICartBrandSelect } from '../interfaces/ICartBrandSelect';
import BrandSelectItem from './BrandSelectItem';
import { getCartListBrands } from '../../../redux/cartSlice/selectors';

const CartBrandSelect: FC<ICartBrandSelect> = ({ styles, selectedBrands, brandOnChange }) => {
    const cartListBrands = useSelector(getCartListBrands);

    return (
        <>
            {sortByBrands(Array.from(new Set([...cartListBrands])), selectedBrands)?.map((brand) => (
                <BrandSelectItem
                    key={brand}
                    styles={styles}
                    brand={brand}
                    selectedBrands={selectedBrands}
                    brandOnChange={brandOnChange}
                />
            ))}
        </>
    );
};

export default CartBrandSelect;
