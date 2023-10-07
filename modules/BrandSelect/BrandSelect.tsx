'use client';

import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBrandSelect } from './interfaces/IBrandSelect';
import styles from './BrandSelect.module.scss';
import { routeConstants } from '../../models/enums/EConstants';
import BrandSelectHeader from './components/BrandSelectHeader';
import CategoryBrandSelect from './components/CategoryBrandSelect';
import SearchBrandSelect from './components/SearchBrandSelect';
import FavoritesBrandSelect from './components/FavoritesBrandSelect';
import CartBrandSelect from './components/CartBrandSelect';
import FavoritesBrandSelectHeader from './components/FavoritesBrandSelectHeader';
import CartBrandSelectHeader from './components/CartBrandSelectHeader';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '../../locales/client';
import { getBrandsDisplay } from '../../redux/stylesSlice/selectors';
import { getBrands, getCartBrands, getFavoritesBrands } from '../../redux/sideBarSlice/selectors';
import {
    addBrand,
    addCartBrand,
    addFavoritesBrand,
    removeBrand,
    removeCartBrand,
    removeFavoritesBrand,
} from '../../redux/sideBarSlice/sideBarSlice';

const BrandSelect: FC<IBrandSelect> = () => {
    const location = usePathname().split('/');
    const locationPath = '/' + location[2];
    const locationParams = location[3];
    const lang = useCurrentLocale();
    const selectedBrands = useSelector(getBrands);
    const selectedCartBrands = useSelector(getCartBrands);
    const selectedFavoritesBrands = useSelector(getFavoritesBrands);
    const brandsDisplay = useSelector(getBrandsDisplay);
    const dispatch = useDispatch();

    const brandOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addBrand(brand) : removeBrand(brand));
    };
    const brandCartOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addCartBrand(brand) : removeCartBrand(brand));
    };
    const brandFavoritesOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addFavoritesBrand(brand) : removeFavoritesBrand(brand));
    };

    return (
        <div
            style={brandsDisplay === 'none' ? {} : { width: '100%' }}
            className={`${styles.brandsContainer} brandsContainer`}
        >
            {(locationPath === routeConstants.CATEGORIES_ROUTE ||
                locationPath === routeConstants.PRODUCT_LIST_ROUTE) && (
                <>
                    <BrandSelectHeader selectedBrands={selectedBrands} styles={styles} />

                    <CategoryBrandSelect
                        styles={styles}
                        categoryId={Number(locationParams)}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                    />
                </>
            )}

            {locationPath === routeConstants.SEARCH_ROUTE && (
                <>
                    <BrandSelectHeader selectedBrands={selectedBrands} styles={styles} />

                    <SearchBrandSelect
                        styles={styles}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                        lang={lang}
                        locationParams={locationParams}
                        locationPath={locationPath}
                    />
                </>
            )}

            {locationPath === routeConstants.FAVORITES_ROUTE && (
                <>
                    <FavoritesBrandSelectHeader styles={styles} selectedBrands={selectedFavoritesBrands} />

                    <FavoritesBrandSelect
                        styles={styles}
                        selectedBrands={selectedFavoritesBrands}
                        brandOnChange={brandFavoritesOnChange}
                        lang={lang}
                        locationPath={locationPath}
                    />
                </>
            )}

            {locationPath === routeConstants.CART_ROUTE && (
                <>
                    <CartBrandSelectHeader styles={styles} selectedBrands={selectedCartBrands} />

                    <CartBrandSelect
                        styles={styles}
                        selectedBrands={selectedCartBrands}
                        brandOnChange={brandCartOnChange}
                    />
                </>
            )}
        </div>
    );
};

export default BrandSelect;
