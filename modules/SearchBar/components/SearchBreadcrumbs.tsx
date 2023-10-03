/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ISearchBreadcrumbs } from '../interfaces/ISearchBreadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';
import { RootState } from '../../../redux/rootReducer';
import { navProductApi } from '../../../redux/services/navProductService';
import { TLang } from '../../../models/types/TLang';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '../../../locales/client';

const SearchBreadcrumbs: FC<ISearchBreadcrumbs> = ({ styles }) => {
    const location = usePathname().split('/');
    const isLocation = location[1] === 'product';
    const lang = useCurrentLocale() as TLang;
    const id = Number(location[2]);
    const [updateProduct, { data: product, isFetching, error }] = navProductApi.useLazyFetchProductQuery();
    const category = useSelector((state: RootState) => state.navSliceReducer.categoryList).find((category) =>
        isLocation ? category.id === product?.parentId : category.id === id,
    );

    useEffect(() => {
        if (isLocation) {
            updateProduct({ id, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <div className={styles.breadcrumbs}>
            {error && <h1>Error!</h1>}
            {!isFetching &&
                category?.routes.map((route) => (
                    <BreadcrumbsItem
                        key={route.id}
                        styles={styles}
                        id={route.id}
                        name={route.name}
                        hasChildren={route.hasChildren ? true : false}
                    />
                ))}
        </div>
    );
};

export default SearchBreadcrumbs;
