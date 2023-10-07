import React, { FC } from 'react';
import { IFavoritesSorting } from '../interfaces/IFavoritesSorting';
import FavoritesSortingItem from './FavoritesSortingItem';
import { useI18n } from '../../../locales/client';

const FavoritesSorting: FC<IFavoritesSorting> = ({ styles }) => {
    const t = useI18n();

    return (
        <>
            <FavoritesSortingItem styles={styles} value="name" name={t('name')} />

            <FavoritesSortingItem styles={styles} value="price" name={t('price')} />

            <FavoritesSortingItem styles={styles} value="brand" name={t('brand')} />
        </>
    );
};

export default FavoritesSorting;
