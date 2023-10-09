'use client';

import React, { useEffect } from 'react';
import SummaryTable from '../../../UI/SummaryTable/SummaryTable';
import CountControl from './CountControl';
import Image from 'next/image';
import addToCartImg from '../../../public/assets/images/addToCart.svg';
import styles from '../Crimping.module.scss';
import { useLazyFetchCrimpingQuery, webCrimpingApi } from '../../../redux/services/webCrimping';
import { useDispatch, useSelector } from 'react-redux';
import { getCrimpingIsFetch, getCrimpingParams, getRopeCount } from '../../../redux/crimpingSlice/selectors';
import { getEurPrice } from '../../../utils/getEurPrice';
import { getCartProductList } from '../../../redux/cartSlice/selectors';
import { addToCart, setCount, toTrueCartUpdate } from '../../../redux/cartSlice/cartSlice';
import { I18nProviderClient, useCurrentLocale, useI18n } from '../../../locales/client';
import Loader from '../../../UI/Loader/Loader';

const Calculation = () => {
    const t = useI18n();
    const lang = useCurrentLocale();
    const ropeCount = useSelector(getRopeCount);
    const cartList = useSelector(getCartProductList);
    const isFetch = useSelector(getCrimpingIsFetch);
    const params = useSelector(getCrimpingParams);
    const [update, { data, isFetching, isError }] = useLazyFetchCrimpingQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFetch && params) {
            update({ lang, ...params });
        }
    }, [isFetch, update, params, lang, dispatch]);

    const addToCartOnClick = () => {
        if (data) {
            data.forEach((product) => {
                cartList.map((v) => v.id).includes(product.id)
                    ? dispatch(
                          setCount({
                              id: product.id,
                              count: Number(
                                  (
                                      (cartList.find((v) => v.id === product.id)?.count as number) +
                                      product.count * ropeCount
                                  ).toFixed(2),
                              ),
                          }),
                      )
                    : dispatch(
                          addToCart({
                              id: product.id,
                              count: Number(product.count.toFixed(2)) * ropeCount,
                              price: product.price,
                              brand: product.brand,
                          }),
                      );
            });
            dispatch(toTrueCartUpdate());
            dispatch(webCrimpingApi.util.resetApiState());
        }
    };

    if (isFetching) {
        return (
            <div className={styles.tableLoading}>
                <Loader />
            </div>
        );
    }

    if (isError) {
        return (
            <div className={styles.tableLoading}>
                <h1 style={{ textAlign: 'center', color: 'rgb(2, 32, 128)' }}>{t('crimping_error')}</h1>
            </div>
        );
    }

    if (data) {
        const totalSum = data.reduce((prev, curr) => prev + curr.count * curr.price, 0) * ropeCount;

        return (
            <>
                <SummaryTable
                    list={data.map((product) => {
                        return {
                            id: product.id,
                            name: product.name,
                            code: product.code,
                            price: product.price,
                            count: product.count,
                        };
                    })}
                />

                <div className={styles.totalSum}>
                    <div className={styles.totalSumTitle}>{t('sum')}</div>

                    <div className={styles.totalSumValue}>{getEurPrice(totalSum)}</div>

                    <CountControl />
                </div>

                <div onClick={addToCartOnClick} className={styles.addToCart}>
                    <div className={styles.addToCartButton}>
                        <button>
                            <Image src={addToCartImg} alt="" width={55} height={55} />
                        </button>

                        <div>{t('add_to_cart_crimping')}</div>
                    </div>
                </div>
            </>
        );
    }

    return null;
};

const Wrapped = () => (
    <I18nProviderClient>
        <Calculation />
    </I18nProviderClient>
);

export default Wrapped;
