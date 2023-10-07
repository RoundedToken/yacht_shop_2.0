import React, { FC } from 'react';
import { ICartSorting } from '../interfaces/ICartSorting';
import CartSortingItem from './CartSortingItem';
import { useI18n } from '../../../locales/client';

const CartSorting: FC<ICartSorting> = ({ styles }) => {
    const t = useI18n();

    return (
        <>
            <CartSortingItem styles={styles} value="name" name={t('name')} />

            <CartSortingItem styles={styles} value="sum" name={t('price')} />

            <CartSortingItem styles={styles} value="brand" name={t('brand')} />
        </>
    );
};

export default CartSorting;
