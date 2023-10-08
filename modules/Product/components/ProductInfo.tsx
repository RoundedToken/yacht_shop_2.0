import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { TId } from '../../../models/types/TId';
import { IProductInfo } from '../interfaces/IProductInfo';
import { useParams } from 'next/navigation';
import { useFetchProductInfoQuery } from '../../../redux/services/webProductInfo';
import { useI18n } from '../../../locales/client';

const ProductInfo: FC<IProductInfo> = ({ styles }) => {
    const id = Number(useParams<TId>().id);
    const { data: productInfo, isFetching, error } = useFetchProductInfoQuery({ id });
    const t = useI18n();

    if (isFetching) {
        return (
            <div className={styles.infoContainer}>
                <>
                    <div className={styles.infoTitle}>{t('product_description')}</div>

                    <Skeleton style={{ height: '150px' }} containerClassName="skeleton" />
                </>
            </div>
        );
    }

    return (
        <div className={styles.infoContainer}>
            {error && <h1>Error!</h1>}
            {productInfo && (
                <>
                    <div className={styles.infoTitle}>{t('product_description')}</div>

                    {productInfo.map((value, i) => {
                        return (
                            <div className={styles.infoItem} key={i}>
                                <div
                                    className={styles.infoItemTitle}
                                    dangerouslySetInnerHTML={{ __html: value[0] }}
                                ></div>

                                <div
                                    className={styles.infoItemContent}
                                    dangerouslySetInnerHTML={{ __html: value[1] }}
                                ></div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ProductInfo;
