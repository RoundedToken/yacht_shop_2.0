'use client';

import React from 'react';
import SearchInput from './components/SearchInput';
import PageTitle from './components/PageTitle';
import SearchBreadcrumbs from './components/SearchBreadcrumbs';
import styles from './SearchBar.module.scss';
import { usePathname } from 'next/navigation';
import { I18nProviderClient } from '../../locales/client';

const SearchBar = () => {
    const location = usePathname().split('/')[2];
    const breadcrumbsPaths = ['category', 'product_list', 'product'];

    return (
        <I18nProviderClient>
            <div className={styles.searchBar}>
                <SearchInput styles={styles} />

                {breadcrumbsPaths.includes(location) ? (
                    <SearchBreadcrumbs styles={styles} />
                ) : (
                    <PageTitle styles={styles} />
                )}
            </div>
        </I18nProviderClient>
    );
};

export default SearchBar;
