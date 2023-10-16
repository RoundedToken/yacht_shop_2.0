import React, { FC } from 'react';
import { ICart } from '../interfaces/ICart';
import CartWrapper from './CartWrapper';

const Cart: FC<ICart> = ({ t, location }) => {
    return <CartWrapper location={location}>{t('cart')}</CartWrapper>;
};

export default Cart;
