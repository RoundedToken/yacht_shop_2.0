import React, { FC } from 'react';
import { ICategorySorting } from '../interfaces/ICategorySorting';
import CategorySortingItem from './CategorySortingItem';
import { useI18n } from '../../../locales/client';

const CategorySorting: FC<ICategorySorting> = ({ styles }) => {
    const t = useI18n();

    return (
        <>
            <CategorySortingItem styles={styles} value="name" name={t('name')} />
        </>
    );
};

export default CategorySorting;
