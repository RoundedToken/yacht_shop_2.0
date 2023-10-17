import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ICartSummary } from '../interfaces/ICartSummary';
import { getEurPrice } from '../../../utils/getEurPrice';
import { getCartProductsCount, getCartTotalSum } from '../../../redux/cartSlice/selectors';
import { useI18n } from '../../../locales/client';

const CartSummary: FC<ICartSummary> = ({ styles }) => {
    const t = useI18n();
    const totalCount = useSelector(getCartProductsCount);
    const totalSum = useSelector(getCartTotalSum);

    return (
        <div className={styles.cartSummary}>
            <div className={styles.totalCount}>
                {t('products')}
                &nbsp;
                <div className={styles.totalCountNumber}>{`(${totalCount})`}</div>
            </div>

            <div className={styles.totalSum}>{getEurPrice(totalSum)}</div>
        </div>
    );
};

export default CartSummary;
