import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { TId } from '../../../models/types/TId';
import { IProductInfo } from '../interfaces/IProductInfo';
import { useParams } from 'next/navigation';
import { useFetchProductInfoQuery } from '../../../redux/services/webProductInfo';
import { useI18n } from '../../../locales/client';

const ProductInfo: FC<IProductInfo> = ({ styles, title }) => {
    const id = Number(useParams<TId>().id);
    const { data: productInfo, isFetching } = useFetchProductInfoQuery({ id });
    const t = useI18n();

    if (isFetching) {
        return (
            <div className={styles.infoContainer}>
                <>
                    <div className={styles.infoTitle}>{title}</div>

                    <Skeleton style={{ height: '150px' }} containerClassName="skeleton" />
                </>
            </div>
        );
    }

    if (productInfo) {
        return (
            <div className={styles.infoContainer}>
                {productInfo.description || productInfo.props.length > 0 ? (
                    <>
                        <div className={styles.infoTitle}>{title}</div>

                        {productInfo.description && (
                            <div className={styles.infoItem} style={{ marginBottom: '20px' }}>
                                <div
                                    className={styles.infoItemContent}
                                    dangerouslySetInnerHTML={{ __html: productInfo.description }}
                                />
                            </div>
                        )}

                        {productInfo.props.map((value, i) => {
                            return (
                                <div className={styles.infoItem} key={i}>
                                    <div
                                        className={styles.infoItemTitle}
                                        dangerouslySetInnerHTML={{ __html: value[0] }}
                                    />

                                    <div
                                        className={styles.infoItemContent}
                                        dangerouslySetInnerHTML={{ __html: value[1] }}
                                    ></div>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <>
                        <div className={styles.infoTitle}>{title}</div>
                        <div className={styles.infoItem}>
                            <div className={styles.infoItemContent}>{t('product_soon')}</div>
                        </div>
                    </>
                )}
            </div>
        );
    }

    return null;
};

export default ProductInfo;
