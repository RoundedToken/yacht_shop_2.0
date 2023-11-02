'use client';

import React, { useEffect } from 'react';
import { TId } from '../../models/types/TId';
import CategoryList from './components/CategoryList';
import { redirect, useParams } from 'next/navigation';
import { useFetchAllIdQuery } from '../../redux/services/navTree';
import { useCurrentLocale } from '../../locales/client';
import styles from './Category.module.scss';
import CategoryListSkeleton from './components/CategoryListSkeleton';

const Category = () => {
    const id = Number(useParams<TId>().id);
    const lang = useCurrentLocale();
    const { data, isLoading } = useFetchAllIdQuery(lang);
    const children = data?.flatTree[`${id}`]?.children;

    useEffect(() => {
        if (data) {
            if (!data.flatTree[`${id}`].children) {
                redirect(`/product_list/${id}`);
            }
        }
    }, [data, id]);

    if (isLoading) {
        return <CategoryListSkeleton />;
    }

    return <>{children && <CategoryList categoryChildren={children} styles={styles} />}</>;
};

export default Category;
