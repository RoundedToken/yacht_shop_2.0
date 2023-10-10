import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import chestImg from '../../../public/assets/images/chest.svg';
import emptyChestImg from '../../../public/assets/images/emptyChest.svg';
import { useSelector } from 'react-redux';
import NavBarItem from './NavBarItem';
import { ICart } from '../interfaces/ICart';
import { getCartProductsCount } from '../../../redux/cartSlice/selectors';
import { useI18n } from '../../../locales/client';

const Cart: FC<ICart> = ({ styles }) => {
    const productCount = useSelector(getCartProductsCount);
    const isCartEmpty = productCount === 0;
    const t = useI18n();

    return (
        <NavBarItem
            styles={styles}
            route={routeConstants.CART_ROUTE}
            src={isCartEmpty ? emptyChestImg : chestImg}
            className={`${styles.navBar__item} ${styles.cart}`}
        >
            {t('cart')}

            <div className={`${styles.cartCounter} cartCounter`}>{productCount}</div>
        </NavBarItem>
    );
};

export default Cart;
