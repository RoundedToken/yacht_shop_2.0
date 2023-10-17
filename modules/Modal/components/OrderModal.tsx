import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IOrderModal } from '../interfaces/IOrderModal';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import Response from './Response';
import { routeConstants } from '../../../models/enums/EConstants';
import { getCartResponse, getCartResponseIsLoading } from '../../../redux/cartSlice/selectors';
import { useRouter } from 'next/navigation';
import { deleteResponse } from '../../../redux/cartSlice/cartSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { useI18n } from '../../../locales/client';

const OrderModal: FC<IOrderModal> = ({ styles }) => {
    const response = useSelector(getCartResponse);
    const responseIsLoading = useSelector(getCartResponseIsLoading);
    const dispatch = useDispatch();
    const t = useI18n();
    const router = useRouter();

    const closeOnClick = () => {
        if (response) {
            dispatch(deleteResponse());
            router.push(routeConstants.MAIN_ROUTE);
        }
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'auto';
    };

    return response ? (
        <div className={styles.response}>
            <Response styles={styles} response={response} />
        </div>
    ) : (
        <div className={styles.modalContent}>
            {!responseIsLoading && (
                <>
                    <div className={styles.title}>
                        <div className={styles.modalClose} onClick={closeOnClick}>
                            &times;
                        </div>

                        {t('your_order')}
                    </div>

                    <OrderList />
                </>
            )}

            <OrderForm styles={styles} />
        </div>
    );
};

export default OrderModal;
