import React, { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { routeConstants } from '../../../models/enums/EConstants';
import { ISearchModal } from '../interfaces/ISearchModal';
import ModalHeader from './ModalHeader';
import { useRouter } from 'next/navigation';
import { useCurrentLocale, useI18n } from '../../../locales/client';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';

const SearchModal: FC<ISearchModal> = ({ styles }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const t = useI18n();
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const placeholder = { rus: 'Поиск...', eng: 'Search...', est: 'Otsing...' };
    const lang = useCurrentLocale();
    const dispatch = useDispatch();

    const navigateOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //@ts-ignore
        document.activeElement.blur();
        e.preventDefault();
        router.push(routeConstants.SEARCH_ROUTE + `?q=${searchValue}`);
        setSearchValue('');
        document.body.style.overflow = 'auto';
        dispatch(switchMobileModalDisplay());
    };
    const searchOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <div className={styles.content}>
            <ModalHeader styles={styles} title={t('search')} />

            <form ref={formRef} className={styles.itemsContainer} onSubmit={(e) => navigateOnSubmit(e)}>
                <input
                    placeholder={placeholder[lang]}
                    name="search"
                    value={searchValue}
                    className={styles.searchInput}
                    type="text"
                    minLength={4}
                    onFocus={(e) => searchOnFocus(e)}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    required
                />
            </form>
        </div>
    );
};

export default SearchModal;
