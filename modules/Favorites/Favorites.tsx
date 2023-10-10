import React from 'react';
import styles from './FavoritesList.module.scss';
import FavoritesEmpty from './components/FavoritesEmpty';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';
import FavoritesWrapper from './FavoritesWrapper';
import { TGetI18n } from '../../locales/server';

const Favorites = ({ t }: { t: TGetI18n }) => {
    return (
        <FavoritesWrapper
            loadingComponent={<ProductCardSkeleton />}
            emptyComponent={<FavoritesEmpty styles={styles} t={t} />}
        />
    );
};

export default Favorites;
