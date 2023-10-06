/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { ISearchBreadcrumbs } from '../interfaces/ISearchBreadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';
import { TLang } from '../../../models/types/TLang';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from '../../../locales/client';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';

const SearchBreadcrumbs: FC<ISearchBreadcrumbs> = ({ styles }) => {
    const location = usePathname().split('/');
    const lang = useCurrentLocale() as TLang;
    const id = Number(location[3]);
    const { data } = useFetchAllIdQuery(lang);
    const category = data?.flatTree[`${id}`];

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
