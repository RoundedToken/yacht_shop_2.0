import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { IPageTitle } from '../interfaces/IPageTitle';
import SearchTitle from './SearchTitle';
import { usePathname } from 'next/navigation';
import { useI18n } from '../../../locales/client';

const PageTitle: FC<IPageTitle> = ({ styles }) => {
    const t = useI18n();
    const location = usePathname().split('/');
    const locationPath = '/' + (location[2] ?? '');
    const searchStr = locationPath === routeConstants.SEARCH_ROUTE ? decodeURI(location[3]) : '';

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
