import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { IRelatedProducts } from '../interfaces/IRelatedProducts';
import { useCurrentLocale, useI18n } from '../../../locales/client';
import { useFetchRelatedProductsQuery } from '../../../redux/services/webRelatedProducts';
import { getCartProductList } from '../../../redux/cartSlice/selectors';

const RelatedProducts: FC<IRelatedProducts> = ({ styles, id, relatedCount }) => {
    const lang = useCurrentLocale();
    const { data, isFetching } = useFetchRelatedProductsQuery({ id, lang });
    const cartProductList = useSelector(getCartProductList);
    const t = useI18n();

    if (isFetching) {
        return (
            <div className={styles.related}>
                <div className={styles.relatedTitle}>{t('related_products')}</div>

                <div className={styles.relatedGrid}>
                    {Array(relatedCount)
                        .fill(0)
                        .map((item, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                </div>
            </div>
        );
    }

    if (data?.length === 0) {
        return null;
    }

    return (
        <div className={styles.related}>
            <div className={styles.relatedTitle}>{t('related_products')}</div>

            <div className={styles.relatedGrid}>
                {data &&
                    data.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            code={product.code}
                            inStock={product.inStock}
                            price={product.price}
                            src={product.src}
                            isDecimals={product.isDecimals}
                            count={
                                cartProductList.find((cartProduct) => cartProduct.id === product.id)?.count as number
                            }
                        />
                    ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
