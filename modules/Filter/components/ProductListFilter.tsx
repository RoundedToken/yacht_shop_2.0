import React, { FC } from 'react';
import { IProductListFilter } from '../interfaces/IProductListFilter';
import ProductListFilterItem from './ProductListFilterItem';
import { useI18n } from '../../../locales/client';

const ProductListFilter: FC<IProductListFilter> = ({ styles }) => {
    const t = useI18n();

    return (
        <>
            <ProductListFilterItem styles={styles} value="inStock" name={t('in_stock')} />
        </>
    );
};

export default ProductListFilter;
