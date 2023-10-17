import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ICartMenu } from '../interfaces/ICartMenu';
import trashImg from '../../../public/assets/images/trash.png';
import checkoutImg from '../../../public/assets/images/checkout.png';
import { emptyCart } from '../../../redux/cartSlice/cartSlice';
import { setModalType } from '../../../redux/modalSlice/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import Image from 'next/image';
import { useI18n } from '../../../locales/client';

const CartMenu: FC<ICartMenu> = ({ styles }) => {
    const t = useI18n();
    const dispatch = useDispatch();

    const emptyCartOnClick = () => {
        dispatch(emptyCart());
    };
    const checkOutOnClick = () => {
        dispatch(setModalType('order'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <div className={styles.cartMenu}>
            <div onClick={emptyCartOnClick} className={styles.emptyTheCart}>
                <div className={styles.emptyTheCartImg}>
                    <Image src={trashImg} alt="" width={32} height={32} />
                </div>

                <div>{t('empty_cart')}</div>
            </div>

            <div className={styles.checkout} onClick={checkOutOnClick}>
                <div className={styles.checkoutImg}>
                    <Image src={checkoutImg} alt="" width={54} height={53} />
                </div>

                <div>{t('checkout')}</div>
            </div>
        </div>
    );
};

export default CartMenu;
