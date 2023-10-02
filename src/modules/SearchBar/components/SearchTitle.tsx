import React, { FC } from 'react';
import { ISearchTitle } from '../interfaces/ISearchTitle';
import { useFetchProductListQuery } from '../../../redux/services/webSearch';
import { useLocale, useTranslations } from 'next-intl';
import { TLang } from '../../../models/types/TLang';

const SearchTitle: FC<ISearchTitle> = ({ searchStr }) => {
    const t = useTranslations('Index');
    const lang = useLocale() as TLang;
    const { data, isFetching, error } = useFetchProductListQuery({ lang, searchStr });

    if (isFetching) {
        return null;
    }

    if (error) {
        return <h3>Error!</h3>;
    }

    return (
        <>
            {t('search')}

            <div>
                &emsp;&quot;{searchStr}&quot;&emsp;{`(${data?.length})`}
            </div>
        </>
    );
};

export default SearchTitle;
