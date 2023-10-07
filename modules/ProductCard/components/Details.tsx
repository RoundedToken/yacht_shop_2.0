import React, { FC } from 'react';
import { IDetails } from '../interfaces/IDetails';
import { useI18n } from '../../../locales/client';

const Details: FC<IDetails> = ({ styles, brand, code, inStock }) => {
    const t = useI18n();

    return (
        <div className={styles.details}>
            <div className={`${styles.details__item} ${styles.brand}`}>
                <div className={styles.details__item__title}>{t('brand')}</div>

                <div className={styles.details__item__content}>{brand}</div>
            </div>

            <div className={styles.details__item}>
                <div className={styles.details__item__title}>{t('code')}</div>

                <div className={styles.details__item__content}>{code}</div>
            </div>

            <div className={`${styles.details__item} ${styles.inStock}`}>
                <div className={styles.details__item__title}>{t('in_stock')}</div>

                <div className={styles.details__item__content}>{inStock ? t('yes') : t('no')}</div>
            </div>
        </div>
    );
};

export default Details;
