import React, { FC } from 'react';
import { IProductListSorting } from '../interfaces/IProductListSorting';
import ProductListSortingItem from './ProductListSortingItem';
import { useI18n } from '../../../locales/client';

const ProductListSorting: FC<IProductListSorting> = ({ styles }) => {
    const t = useI18n();
    return (
        <>
            <ProductListSortingItem styles={styles} value="name" name={t('name')} />

            <ProductListSortingItem styles={styles} value="price" name={t('price')} />

            <ProductListSortingItem styles={styles} value="brand" name={t('brand')} />
        </>
    );
};

export default ProductListSorting;
