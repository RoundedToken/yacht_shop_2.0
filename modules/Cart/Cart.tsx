'use client';

import React, { FC, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';
import styles from './Cart.module.scss';
import CartMenu from './components/CartMenu';
import CartProductList from './components/CartProductList';
import CartSummary from './components/CartSummary';
import EmptyCart from './components/EmptyCart';
import { ICart } from './interfaces/ICart';
import { getCartIdList, getCartProductList, getCartUpdate } from '../../redux/cartSlice/selectors';
import { I18nProviderClient, useCurrentLocale } from '../../locales/client';
import { useLazyFetchCartProductListQuery } from '../../redux/services/webCartProductList';
import { isClient } from '../../utils/isClient';

const Cart: FC<ICart> = () => {
    const productList = useSelector(getCartProductList);
    const fixedOrderRef = useRef<HTMLDivElement>(null);
    const idList = useSelector(getCartIdList);
    const lang = useCurrentLocale();
    const cartUpdate = useSelector(getCartUpdate);
    const [update, { data, isFetching, error }] = useLazyFetchCartProductListQuery();
    const { ref, inView } = useInView();
    const isWidth = isClient && window.innerWidth < 1439;

    //lang
    useEffect(() => {
        update({ idList, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    //cart update
    useEffect(() => {
        if (cartUpdate) {
            update({ idList, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartUpdate]);

    if (!idList || idList.length === 0) {
        return (
            <I18nProviderClient>
                <div className={styles.cart}>
                    <EmptyCart styles={styles} />
                </div>
            </I18nProviderClient>
        );
    }

    if (isFetching || !data) {
        return (
            <I18nProviderClient>
                <div className={styles.cart}>
                    <div className={styles.cardProductList}>
                        {idList.map((id) => (
                            <ProductCardSkeleton key={id} />
                        ))}
                    </div>

                    <div ref={ref} className={styles.orderContainer}>
                        <CartSummary styles={styles} />

                        <CartMenu styles={styles} />
                    </div>

                    {!inView && isWidth && (
                        <div ref={fixedOrderRef} className={styles.fixedOrder}>
                            <CartSummary styles={styles} />

                            <CartMenu styles={styles} />
                        </div>
                    )}
                </div>
            </I18nProviderClient>
        );
    }

    return (
        <I18nProviderClient>
            <div className={styles.cartContainer}>
                {error && <h1>Error!</h1>}
                {data && (
                    <div className={styles.cart}>
                        <CartProductList styles={styles} data={data} productList={productList} />

                        <div ref={ref} className={styles.orderContainer}>
                            <CartSummary styles={styles} />

                            <CartMenu styles={styles} />
                        </div>

                        {!inView && isWidth && (
                            <div ref={fixedOrderRef} className={styles.fixedOrder}>
                                <CartSummary styles={styles} />

                                <CartMenu styles={styles} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </I18nProviderClient>
    );
};

export default Cart;
