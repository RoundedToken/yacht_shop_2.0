import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TDelivery } from '../../../models/types/TDelivery';
import { IOrderForm } from '../interfaces/IOrderForm';
import sentImg from '../../../public/assets/images/sent.png';
import { useFetchOrderMutation } from '../../../redux/services/webOrder';
import { RootState } from '../../../redux/rootReducer';
import { useCurrentLocale, useI18n } from '../../../locales/client';
import { copyCart, emptyCart, setResponse, switchResponseIsLoading } from '../../../redux/cartSlice/cartSlice';
import Loader from '../../../UI/Loader/Loader';
import Image from 'next/image';

const OrderForm: FC<IOrderForm> = ({ styles }) => {
    const [sendProductList, { data, isLoading, error }] = useFetchOrderMutation();
    const productList = useSelector((state: RootState) => state.cartSliceReducer.productList).map((product) => {
        return { id: product.id, count: product.count };
    });
    const lang = useCurrentLocale();
    const dispatch = useDispatch();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const commentsRef = useRef<HTMLTextAreaElement>(null);
    const deliveryRef = useRef<HTMLSelectElement>(null);
    const t = useI18n();

    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(switchResponseIsLoading(true));
        dispatch(copyCart());
        dispatch(emptyCart());
        sendProductList({
            lang,
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            comments: commentsRef.current?.value || '',
            delivery: (deliveryRef.current?.value as TDelivery) || 'pickUp',
            productList: productList,
        });
    };

    useEffect(() => {
        if (data) {
            dispatch(switchResponseIsLoading(false));
            dispatch(setResponse(data));
        }
    }, [data, dispatch]);

    if (isLoading) {
        return <Loader className="orderSpinner" />;
    }

    if (error) {
        return <h1>Error!</h1>;
    }

    return (
        <form className={styles.orderForm} onSubmit={(e) => formOnSubmit(e)}>
            <div className={styles.formName}>
                <label htmlFor="name">{t('name')}:</label>

                <input ref={nameRef} type="text" name="name" minLength={3} maxLength={25} required />
            </div>

            <div className={styles.delivery}>
                <select ref={deliveryRef} required>
                    <option value="">{t('delivery_type')}</option>
                    <option value="pickUp">{t('pickup')}</option>
                    <option value="post">Omnivia</option>
                </select>
            </div>

            <div className={styles.formEmail}>
                <label htmlFor="email">Email:</label>

                <input ref={emailRef} type="email" name="email" required />
            </div>

            <div className={styles.formComments}>
                <label htmlFor="comments">{t('order_text_1')}</label>

                <textarea ref={commentsRef} name="comments" />
            </div>

            <div className={styles.formSubmit}>
                <button type="submit">
                    <Image src={sentImg} alt="" width={65} height={65} />
                </button>
                {t('order_text_2')}
            </div>
        </form>
    );
};

export default OrderForm;
