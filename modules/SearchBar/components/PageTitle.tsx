import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IPageTitle } from '../interfaces/IPageTitle';
import SearchTitle from './SearchTitle';

const PageTitle: FC<IPageTitle> = ({ styles, location, searchStr, t }) => {
    const searchTitle = t('search');

    return (
        <div className={styles.pageTitle}>
            {location === routeConstants.MAIN_ROUTE && t('main')}
            {location === routeConstants.CRIMPING_ROUTE && t('rope_crimping')}
            {location === routeConstants.CONTACTS_ROUTE && t('contacts')}
            {location === routeConstants.CART_ROUTE && t('cart')}
            {location === routeConstants.FAVORITES_ROUTE && t('favorites')}
            {location === routeConstants.SEARCH_ROUTE && searchStr.length > 3 && (
                <SearchTitle searchStr={decodeURI(searchStr)} searchTitle={searchTitle} />
            )}
        </div>
    );
};

export default PageTitle;
