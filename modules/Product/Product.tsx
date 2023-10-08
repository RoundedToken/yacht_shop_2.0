'use client';

import React from 'react';
import { TId } from '../../models/types/TId';
import ProductNotFound from './components/ProductNotFound';
import styles from './Product.module.scss';
import ProductInfo from './components/ProductInfo';
import RelatedProducts from './components/RelatedProducts';
import defaultBrandImg from '../../public/assets/images/defaultBrand.png';
import ProductMenu from './components/ProductMenu';
import ProductDescription from './components/ProductDescription';
import ProductSkeleton from './components/ProductSkeleton';
import { useParams } from 'next/navigation';
import { I18nProviderClient, useCurrentLocale } from '../../locales/client';
import { useFetchProductQuery } from '../../redux/services/navProductService';
import OnImgErrorHOC from '../../hooks/OnImgErrorHOC';

const Product = () => {
    const id = Number(useParams<TId>().id);
    const lang = useCurrentLocale();
    const { data: product, isFetching, error } = useFetchProductQuery({ id, lang });

    if (isFetching) {
        return (
            <div className={styles.rootContainer}>
                <I18nProviderClient>
                    <ProductSkeleton styles={styles} />
                </I18nProviderClient>
            </div>
        );
    }

    return (
        <div className={styles.rootContainer}>
            <I18nProviderClient>
                {error && <h1>Error!</h1>}
                {product &&
                    !isFetching &&
                    (product.name ? (
                        <div className={styles.grid}>
                            <ProductMenu
                                isDecimals={product.isDecimals}
                                styles={styles}
                                id={product.id}
                                brand={product.brand}
                                price={product.price}
                            />

                            <ProductDescription styles={styles} product={product} />

                            <div className={styles.brandLogo}>
                                <OnImgErrorHOC
                                    src={product.brandLogo}
                                    defaultSrc={defaultBrandImg}
                                    width={157}
                                    height={75}
                                    defaultClassName={styles.defaultProductPic}
                                />
                            </div>

                            <div className={styles.info}>
                                <ProductInfo styles={styles} />
                            </div>

                            {product.relatedCount !== 0 && (
                                <RelatedProducts styles={styles} id={product.id} relatedCount={product.relatedCount} />
                            )}
                        </div>
                    ) : (
                        <ProductNotFound />
                    ))}
            </I18nProviderClient>
        </div>
    );
};

export default Product;
