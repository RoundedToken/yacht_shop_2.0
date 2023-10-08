/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect } from 'react';
import { ISearchBreadcrumbs } from '../interfaces/ISearchBreadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';
import { TLang } from '../../../models/types/TLang';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '../../../locales/client';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { useLazyFetchProductQuery } from '../../../redux/services/navProductService';

const SearchBreadcrumbs: FC<ISearchBreadcrumbs> = ({ styles }) => {
    const pathname = usePathname().split('/');
    const isProduct = pathname[2] === 'product';
    const lang = useCurrentLocale() as TLang;
    const id = Number(pathname[3]);
    const { data } = useFetchAllIdQuery(lang);
    const [updateProduct, { data: product }] = useLazyFetchProductQuery();
    const category = data?.flatTree[`${isProduct ? product?.parentId : id}`];

    useEffect(() => {
        if (isProduct) {
            updateProduct({ id, lang });
        }
    }, [id, lang, updateProduct, isProduct]);

    return (
        <div className={styles.breadcrumbs}>
            {category?.routes.map((route) => (
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
