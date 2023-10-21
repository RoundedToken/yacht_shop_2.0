'use client';

import React from 'react';
import { TId } from '../../models/types/TId';
import styles from './Product.module.scss';
import ProductInfo from './components/ProductInfo';
import RelatedProducts from './components/RelatedProducts';
import defaultBrandImg from '../../public/assets/images/defaultBrand.webp';
import ProductMenu from './components/ProductMenu';
import ProductDescription from './components/ProductDescription';
import ProductSkeleton from './components/ProductSkeleton';
import { useParams } from 'next/navigation';
import { I18nProviderClient, useCurrentLocale } from '../../locales/client';
import { useFetchProductQuery } from '../../redux/services/navProductService';
import OnImgErrorHOC from '../../hooks/OnImgErrorHOC';

const Product = ({ title }: { title: string }) => {
    const id = Number(useParams<TId>().id);
    const lang = useCurrentLocale();
    const { data: product, isFetching } = useFetchProductQuery({ id, lang });

    return (
        <div className={styles.rootContainer}>
            <I18nProviderClient>
                <div className={styles.grid}>
                    {product && (
                        <>
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
                        </>
                    )}

                    {isFetching && <ProductSkeleton styles={styles} />}

                    <div className={styles.info}>
                        <ProductInfo styles={styles} title={title} />
                    </div>

                    {product && product.relatedCount !== 0 && (
                        <RelatedProducts styles={styles} id={product.id} relatedCount={product.relatedCount} />
                    )}
                </div>
            </I18nProviderClient>
        </div>
    );
};

export default Product;
