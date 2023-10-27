'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductList.module.scss';
import { routeConstants } from '../../models/enums/EConstants';
import CategoryProductList from './components/CategoryProductList';
import SearchProductList from './components/SearchProductList';
import { usePathname } from 'next/navigation';
import { I18nProviderClient, useCurrentLocale } from '../../locales/client';
import { getSelectedBrands } from '../../redux/sideBarSlice/selectors';

const ProductList = ({ searchStr }: { searchStr?: string }) => {
    const location = '/' + usePathname().split('/')[2];
    const lang = useCurrentLocale();
    const brands = useSelector(getSelectedBrands);

    return (
        <div className={styles.productListContainer}>
            <I18nProviderClient>
                {location === routeConstants.PRODUCT_LIST_ROUTE && (
                    <CategoryProductList styles={styles} brands={brands} lang={lang} />
                )}
                {location === routeConstants.SEARCH_ROUTE && (
                    <SearchProductList styles={styles} brands={brands} lang={lang} searchStr={searchStr} />
                )}
            </I18nProviderClient>
        </div>
    );
};

export default ProductList;
