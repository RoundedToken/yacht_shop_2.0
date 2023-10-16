'use client';

import React, { ReactNode } from 'react';
import NavBarItem from './NavBarItem';
import styles from '../Header.module.scss';
import { getCartProductsCount } from '../../../redux/cartSlice/selectors';
import { useSelector } from 'react-redux';
import { routeConstants } from '../../../models/enums/EConstants';
import chestImg from '../../../public/assets/images/chest.svg';
import emptyChestImg from '../../../public/assets/images/emptyChest.svg';

const CartWrapper = ({ location, children }: { location: string; children: ReactNode }) => {
    const productCount = useSelector(getCartProductsCount);
    const isCartEmpty = productCount === 0;

    return (
        <NavBarItem
            location={location}
            styles={styles}
            route={routeConstants.CART_ROUTE}
            src={isCartEmpty ? emptyChestImg : chestImg}
            className={`${styles.navBar__item} ${styles.cart}`}
        >
            {children}

            <div className={`${styles.cartCounter} cartCounter`}>{productCount}</div>
        </NavBarItem>
    );
};

export default CartWrapper;
