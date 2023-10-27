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
import * as Select from '@radix-ui/react-select';
import arrowImg from '../../../public/assets/images/arrow.png';

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
                <label htmlFor="name">{t('order_name')}:</label>

                <input ref={nameRef} type="text" name="name" minLength={3} maxLength={25} required />
            </div>

            <div className={styles.formEmail}>
                <label htmlFor="email">Email:</label>

                <input ref={emailRef} type="email" name="email" required />
            </div>

            <div className={styles.delivery}>
                <Select.Root onValueChange={(e) => console.log(e)}>
                    <Select.Trigger className={styles.selectTrigger}>
                        <Select.Value placeholder={t('delivery_type')} />
                        <Select.Icon>
                            <Image src={arrowImg} width={25} height={25} alt="" />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Content sideOffset={10} position="popper" className={styles.selectContent}>
                        <Select.Group>
                            <Select.Label className={styles.selectLabel}>{t('delivery_type')}</Select.Label>
                            <Select.Item className={styles.selectItem} value="pickUp">
                                <Select.ItemText>{t('pickup')}</Select.ItemText>
                            </Select.Item>
                            <Select.Item className={styles.selectItem} value="post">
                                <Select.ItemText>Omnivia</Select.ItemText>
                            </Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
            </div>

            <div className={styles.formComments}>
                <label htmlFor="comments">{t('order_text_1')}</label>

                <textarea ref={commentsRef} name="comments" />
            </div>

            <div className={styles.formSubmit}>
                <button type="submit">
                    <Image src={sentImg} alt="" width={65} height={65} />
                </button>
                <div>{t('order_text_2')}</div>
            </div>
        </form>
    );
};

export default OrderForm;
