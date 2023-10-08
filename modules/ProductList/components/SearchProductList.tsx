import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TSearchQuery } from '../../../models/types/TSearchQuery';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { ISearchProductList } from '../interfaces/ISearchProductList';
import CardProductList from './CardProductList';
import TableProductList from './TableProductList';
import { useParams } from 'next/navigation';
import { getListMode } from '../../../redux/sideBarSlice/selectors';
import { useFetchProductListQuery } from '../../../redux/services/webSearch';

const SearchProductList: FC<ISearchProductList> = ({ styles, brands, lang }) => {
    const searchStr = useParams<TSearchQuery>().searchStr || '';
    const listMode = useSelector(getListMode);
    const { data: productList, isFetching, error } = useFetchProductListQuery({ searchStr: decodeURI(searchStr), lang });

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
                    <h1>ProductList Not Found</h1>
                ) : listMode === 'table' ? (
                    <TableProductList styles={styles} brands={brands} productList={productList} />
                ) : (
                    <CardProductList styles={styles} brands={brands} productList={productList} />
                ))}
        </>
    );
};

export default SearchProductList;
