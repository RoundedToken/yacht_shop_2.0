import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';
import { IResponse } from '../interfaces/IResponse';
import SummaryTable from '../../../UI/SummaryTable/SummaryTable';
import { deleteResponse } from '../../../redux/cartSlice/cartSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { useI18n } from '../../../locales/client';

const Response: FC<IResponse> = ({ styles, response }) => {
    const dispatch = useDispatch();
    const t = useI18n();

    const toCatalog = () => {
        document.body.style.overflow = 'auto';
        dispatch(deleteResponse());
        dispatch(switchModalDisplay());
    };

    return (
        <div className={styles.modalContent}>
            <div className={styles.title}>{t('response_text_1', { id: response.orderId })}</div>

            <SummaryTable
                list={response.orderList.map((product) => {
                    return {
                        id: product.id,
                        name: product.name,
                        code: product.code,
                        price: product.price,
                        count: product.count,
                    };
                })}
            />

            <div className={styles.toCatalogButton} onClick={toCatalog}>
                <ToCatalogButton t={t} />
            </div>
        </div>
    );
};

export default Response;
