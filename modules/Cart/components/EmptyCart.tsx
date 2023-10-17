import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import restoreImg from '../../../public/assets/images/restore.png';
import { IEmptyCart } from '../interfaces/IEmptyCart';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';
import { getCartIsCopy } from '../../../redux/cartSlice/selectors';
import { restoreCart, toTrueCartUpdate } from '../../../redux/cartSlice/cartSlice';
import { useI18n } from '../../../locales/client';
import Image from 'next/image';

const EmptyCart: FC<IEmptyCart> = ({ styles }) => {
    const dispatch = useDispatch();
    const isCopy = useSelector(getCartIsCopy);
    const t = useI18n();

    const restoreCartOnClick = () => {
        dispatch(restoreCart());
        dispatch(toTrueCartUpdate());
    };

    return (
        <div className={styles.emptyCart}>
            <div className={styles.emptyCartTitle}>{t('cart_text_1')}</div>

            <div className={styles.emptyCartMenu}>
                {isCopy && (
                    <div className={styles.restoreCart} onClick={restoreCartOnClick}>
                        <div className={styles.restoreImg}>
                            <Image src={restoreImg} alt="" width={54} height={54} />
                        </div>

                        <div>{t('restore_cart')}</div>
                    </div>
                )}

                <ToCatalogButton t={t} />
            </div>
        </div>
    );
};

export default EmptyCart;
