'use client';

import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { routeConstants } from '../../../models/enums/EConstants';
import { ISearchInput } from '../interfaces/ISearchInput';
import { clearBrands } from '../../../redux/sideBarSlice/sideBarSlice';
import { useRouter } from 'next/navigation';

const SearchInput: FC<ISearchInput> = ({ styles, children, placeholder }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('!!');

        e.preventDefault();
        //@ts-ignore
        document.activeElement.blur();
        router.push(routeConstants.SEARCH_ROUTE + `/${searchValue}`);
        dispatch(clearBrands('/search'));
    };
    const searchOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    const qq = () => {
        console.log('HERE');
        console.log(formRef.current);

        formRef.current?.submit();
        formRef.current?.dispatchEvent(new Event('submit'));
    };

    return (
        <form ref={formRef} className={styles.searchContainer} onSubmit={(e) => navigateOnSubmit(e)}>
            <input
                placeholder={placeholder}
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
            {children}
        </form>
    );
};

export default SearchInput;
