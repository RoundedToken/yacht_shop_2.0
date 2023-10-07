import React, { FC } from 'react';
import { ICartListFilter } from '../interfaces/ICartListFilter';
import CartListFilterItem from './CartListFilterItem';
import { useI18n } from '../../../locales/client';

const CartListFilter: FC<ICartListFilter> = ({ styles }) => {
    const t = useI18n();
    return (
        <>
            <CartListFilterItem styles={styles} value="inStock" name={t('in_stock')} />
        </>
    );
};

export default CartListFilter;
