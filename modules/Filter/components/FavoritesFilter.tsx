import React, { FC } from 'react';
import { IFavoritesFilter } from '../interfaces/IFavoritesFilter';
import FavoritesFilterItem from './FavoritesFilterItem';
import { useI18n } from '../../../locales/client';

const FavoritesFilter: FC<IFavoritesFilter> = ({ styles }) => {
    const t = useI18n();
    return (
        <>
            <FavoritesFilterItem styles={styles} value="inStock" name={t('in_stock')} />
        </>
    );
};

export default FavoritesFilter;
