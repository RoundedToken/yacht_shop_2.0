import React from 'react';
import SearchInput from './components/SearchInput';
import PageTitle from './components/PageTitle';
import SearchBreadcrumbs from './components/SearchBreadcrumbs';
import styles from './SearchBar.module.scss';
import lifebuoyImg from '../../public/assets/images/lifebuoy.svg';
import { TGetI18n } from '../../locales/server';

const SearchBar = ({ location, t, searchStr = '' }: { location: string; t: TGetI18n; searchStr?: string }) => {
    const breadcrumbsPaths = ['/category', '/product_list', '/product'];
    const placeholder = t('search');

    return (
        <div className={styles.searchBar}>
            <SearchInput styles={styles} placeholder={placeholder}>
                <input
                    type="image"
                    className={styles.submit}
                    src={lifebuoyImg.src}
                    alt="submit search"
                    width={50}
                    height={50}
                />
            </SearchInput>

            {breadcrumbsPaths.includes(location) ? (
                <SearchBreadcrumbs styles={styles} />
            ) : (
                <PageTitle styles={styles} t={t} location={location} searchStr={searchStr} />
            )}
        </div>
    );
};

export default SearchBar;
