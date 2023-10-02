import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import lifebuoyImg from '../../../../public/assets/images/lifebuoy.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import { ISearchInput } from '../interfaces/ISearchInput';
import { useTranslations } from 'next-intl';
import { clearBrands } from '../../../redux/sideBarSlice/sideBarSlice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SearchInput: FC<ISearchInput> = ({ styles }) => {
    const t = useTranslations('Index');
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //@ts-ignore
        document.activeElement.blur();
        router.push(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        dispatch(clearBrands());
    };
    const searchOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <form ref={formRef} className={styles.searchContainer} onSubmit={(e) => navigateOnSubmit(e)}>
            <input
                placeholder={t('search')}
                name="search"
                autoComplete="on"
                value={searchValue}
                className={styles.searchInput}
                type="text"
                minLength={3}
                maxLength={50}
                onFocus={(e) => searchOnFocus(e)}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                required
            />

            <Image className={styles.submit} src={lifebuoyImg} alt="" width={50} height={50} />
        </form>
    );
};

export default SearchInput;
