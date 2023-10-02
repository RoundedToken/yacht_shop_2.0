import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IPageTitle } from '../interfaces/IPageTitle';
import SearchTitle from './SearchTitle';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';

const PageTitle: FC<IPageTitle> = ({ styles }) => {
    const t = useTranslations('Index');
    const location = usePathname().split('/');
    const locationPath = '/' + location[1];
    const searchStr = locationPath === routeConstants.SEARCH_ROUTE ? decodeURI(location[2]) : '';
    console.log(locationPath);

    return (
        <div className={styles.pageTitle}>
            {locationPath === routeConstants.MAIN_ROUTE && t('main')}
            {locationPath === routeConstants.CRIMPING_ROUTE && t('rope_crimping')}
            {locationPath === routeConstants.CONTACTS_ROUTE && t('contacts')}
            {locationPath === routeConstants.CART_ROUTE && t('cart')}
            {locationPath === routeConstants.FAVORITES_ROUTE && t('favorites')}
            {locationPath === routeConstants.SEARCH_ROUTE && <SearchTitle searchStr={searchStr} />}
        </div>
    );
};

export default PageTitle;
