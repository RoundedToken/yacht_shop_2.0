import React, { FC } from 'react';
import clearCartImg from '../../public/assets/images/clearCart.svg';
import addToCartImg from '../../public/assets/images/addToCart.svg';
import { ICartButton } from './IProductCart';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartButton.module.scss';
import { getCartProductList } from '../../redux/cartSlice/selectors';
import { addToCart, removeFromCart, toTrueCartUpdate } from '../../redux/cartSlice/cartSlice';
import Image from 'next/image';

const CartButton: FC<ICartButton> = ({ id, price, brand, isDecimals }) => {
    const cartProductList = useSelector(getCartProductList);
    const dispatch = useDispatch();

    const addToCartOnClick = (id: number, price: number, brand: string) => {
        dispatch(addToCart({ id, count: isDecimals ? 0.5 : 1, price, brand }));
        dispatch(toTrueCartUpdate());
    };
    const removeFromCartOnClick = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return cartProductList.find((cartProduct) => cartProduct.id === id) ? (
        <div className={styles.remove} onClick={() => removeFromCartOnClick(id)}>
            <Image src={clearCartImg} alt="" width={32} height={32} />
        </div>
    ) : (
        <div className={styles.addToCart} onClick={() => addToCartOnClick(id, price, brand)}>
            <Image src={addToCartImg} alt="" width={32} height={32} />
        </div>
    );
};

export default CartButton;
