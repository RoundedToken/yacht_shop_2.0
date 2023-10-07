import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { TId } from '../../../models/types/TId';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { ICategoryProductList } from '../interfaces/ICategoryProductList';
import CardProductList from './CardProductList';
import TableProductList from './TableProductList';
import { useParams } from 'next/navigation';
import { getListMode } from '../../../redux/sideBarSlice/selectors';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { useFetchProductListQuery } from '../../../redux/services/navProductListService';

const CategoryProductList: FC<ICategoryProductList> = ({ styles, brands, lang }) => {
    const id = Number(useParams<TId>().id);
    const listMode = useSelector(getListMode);
    const { data } = useFetchAllIdQuery(lang);
    const productCount = data?.flatTree[`${id}`].productCount;
    const { data: productList, isFetching, error } = useFetchProductListQuery({ id, lang });

    return (
        <>
            {isFetching && (
                <div className={styles.productListGrid}>
                    {Array(productCount)
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
                    <TableProductList styles={styles} productList={productList} brands={brands} />
                ) : (
                    <CardProductList styles={styles} productList={productList} brands={brands} />
                ))}
        </>
    );
};

export default CategoryProductList;
