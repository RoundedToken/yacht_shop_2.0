'use client';

import React, { FC, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { IBreadcrumbs } from '../interfaces/IBreadcrumbs';
import { setMobileModalType } from '../../../redux/modalSlice/modalSlice';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '../../../locales/client';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { useLazyFetchProductQuery } from '../../../redux/services/navProductService';

const Breadcrumbs: FC<IBreadcrumbs> = ({ styles }) => {
    const pathname = usePathname().split('/');
    const isProduct = pathname[2] === 'product';
    const lang = useCurrentLocale();
    const id = Number(pathname[3]);
    const { data, isFetching } = useFetchAllIdQuery(lang);
    const dispatch = useDispatch();
    const [updateProduct, { data: product }] = useLazyFetchProductQuery();
    const category = data?.flatTree[isProduct ? product?.parentId ?? 0 : id];

    const handleOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('breadcrumbs'));
        dispatch(switchMobileModalDisplay());
    };

    useEffect(() => {
        if (isProduct) {
            updateProduct({ id, lang });
        }
    }, [id, lang, updateProduct, isProduct]);

    if (isFetching) {
        return (
            <div className={styles.breadcrumbs}>
                <Skeleton containerClassName="skeleton" />
            </div>
        );
    }

    return (
        <div className={styles.breadcrumbs} onClick={handleOnClick}>
            <div className={styles.breadcrumbsName}>{category?.routes.at(-1)?.name}</div>
            <div className={styles.symbolLast}> &#9660;</div>
        </div>
    );
};

export default Breadcrumbs;
