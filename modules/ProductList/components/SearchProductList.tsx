import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { ISearchProductList } from '../interfaces/ISearchProductList';
import CardProductList from './CardProductList';
import TableProductList from './TableProductList';
import { getListMode } from '../../../redux/sideBarSlice/selectors';
import { useFetchProductListQuery } from '../../../redux/services/webSearch';
import { setSearchProductList } from '../../../redux/categoriesSlice/categoriesSlice';
import { useI18n } from '../../../locales/client';

const SearchProductList: FC<ISearchProductList> = ({ styles, brands, lang, searchStr = '' }) => {
    const listMode = useSelector(getListMode);
    const dispatch = useDispatch();
    const t = useI18n();
    const {
        data: productList,
        isFetching,
        error,
    } = useFetchProductListQuery({ searchStr: decodeURI(searchStr), lang });

    useEffect(() => {
        if (productList) {
            dispatch(setSearchProductList(productList));
        }
    }, [productList, dispatch]);

    if (searchStr.length < 4) {
        return (
            <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>{t('search_text_2')}</h1>
            </div>
        );
    }

    return (
        <>
            {isFetching && (
                <div className={styles.productListGrid}>
                    {Array(10)
                        .fill(null)
                        .map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                </div>
            )}
            {error && <h1>Error!</h1>}
            {!isFetching &&
                productList &&
                (productList.length === 0 ? (
                    <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ textAlign: 'center' }}>{t('search_text_1')}</h1>
                    </div>
                ) : listMode === 'table' ? (
                    <TableProductList styles={styles} brands={brands} productList={productList} />
                ) : (
                    <CardProductList styles={styles} brands={brands} productList={productList} />
                ))}
        </>
    );
};

export default SearchProductList;
