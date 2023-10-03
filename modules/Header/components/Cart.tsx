import React, { FC, useEffect } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import chestImg from '../../../public/assets/images/chest.svg';
import emptyChestImg from '../../../public/assets/images/emptyChest.svg';
import { useDispatch, useSelector } from 'react-redux';
import NavBarItem from './NavBarItem';
import { ICart } from '../interfaces/ICart';
import { getProductCount } from '../../../redux/cartSlice/selectors';
import { setProductListFromStorage } from '../../../redux/cartSlice/cartSlice';
import { useI18n } from '../../../locales/client';

const Cart: FC<ICart> = ({ styles }) => {
    const productCount = useSelector(getProductCount);
    const dispatch = useDispatch();
    const isCartEmpty = productCount === 0;
    const t = useI18n();

    useEffect(() => {
        dispatch(setProductListFromStorage());
    }, [dispatch]);

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
