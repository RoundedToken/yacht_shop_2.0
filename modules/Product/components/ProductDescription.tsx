import React, { FC } from 'react';
import { IProductDescription } from '../interfaces/IProductDescription';
import ProductSwiper from './ProductSwiper';
import defaultBrandImg from '../../../public/assets/images/defaultBrand.webp';
import OnImgErrorHOC from '../../../hooks/OnImgErrorHOC';
import { useI18n } from '../../../locales/client';

const ProductDescription: FC<IProductDescription> = ({ styles, product }) => {
    const t = useI18n();

    return (
        <div className={styles.description}>
            <ProductSwiper styles={styles} picSrc={product.src} />

            <div className={styles.details}>
                <div className={styles.name}>{product.name}</div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>{t('in_stock')}</div>

                    <div className={styles.inStock}>{product.inStock ? t('yes') : t('no')}</div>
                </div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>{t('quantity_in_stock')}</div>

                    <div className={styles.count}>{product.inStockCount}</div>
                </div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>{t('code')}</div>

                    <div className={styles.code}>{product.code}</div>
                </div>

                <div className={styles.detailsItem}>
                    <div className={styles.detailsItemTitle}>{t('brand')}</div>

                    <div className={styles.brand}>{product.brand}</div>
                </div>

                <div className={styles._mobileBrandLogo}>
                    <OnImgErrorHOC
                        src={product.brandLogo}
                        defaultSrc={defaultBrandImg}
                        defaultClassName={styles.defaultProductPic}
                        width={150}
                        height={65}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
