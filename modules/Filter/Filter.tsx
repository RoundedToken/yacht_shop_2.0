'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { routeConstants } from '../../models/enums/EConstants';
import CartListFilter from './components/CartListFilter';
import FavoritesFilter from './components/FavoritesFilter';
import ProductListFilter from './components/ProductListFilter';
import styles from './Filter.module.scss';
import { getFilterDisplay } from '../../redux/stylesSlice/selectors';
import FilterHeader from './components/FilterHeader';
import { useLocation } from '../../hooks/useLocation';
import { I18nProviderClient } from '../../locales/client';

const Filter = ({ title }: { title: string }) => {
    const location = useLocation();
    const filterDisplay = useSelector(getFilterDisplay);

    return (
        <div style={filterDisplay === 'none' ? {} : { width: '100%' }} className={styles.filterContainer}>
            <FilterHeader title={title} styles={styles} />

            <I18nProviderClient>
                {(routeConstants.PRODUCT_LIST_ROUTE === location || routeConstants.SEARCH_ROUTE === location) && (
                    <ProductListFilter styles={styles} />
                )}

                {routeConstants.CART_ROUTE === location && <CartListFilter styles={styles} />}

                {routeConstants.FAVORITES_ROUTE === location && <FavoritesFilter styles={styles} />}
            </I18nProviderClient>
        </div>
    );
};

export default Filter;
