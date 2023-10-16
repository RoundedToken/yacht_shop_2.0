'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { routeConstants } from '../../models/enums/EConstants';
import CartSorting from './components/CartSorting';
import CategorySorting from './components/CategorySorting';
import FavoritesSorting from './components/FavoritesSorting';
import ProductListSorting from './components/ProductListSorting';
import SortingHeader from './components/SortingHeader';
import styles from './Sorting.module.scss';
import { getSortingDisplay } from '../../redux/stylesSlice/selectors';
import { useLocation } from '../../hooks/useLocation';
import { I18nProviderClient } from '../../locales/client';

const Sorting = ({ title }: { title: string }) => {
    const location = useLocation();
    const sortingDisplay = useSelector(getSortingDisplay);

    return (
        <div style={sortingDisplay === 'none' ? {} : { width: '100%' }} className={styles.sortingContainer}>
            <SortingHeader title={title} styles={styles} />

            <I18nProviderClient>
                {routeConstants.CART_ROUTE === location && <CartSorting styles={styles} />}

                {routeConstants.FAVORITES_ROUTE === location && <FavoritesSorting styles={styles} />}

                {routeConstants.CATEGORIES_ROUTE === location && <CategorySorting styles={styles} />}

                {(routeConstants.PRODUCT_LIST_ROUTE === location || routeConstants.SEARCH_ROUTE === location) && (
                    <ProductListSorting styles={styles} />
                )}
            </I18nProviderClient>
        </div>
    );
};

export default Sorting;
