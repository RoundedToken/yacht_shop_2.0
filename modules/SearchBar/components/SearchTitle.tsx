'use client';

import React, { FC } from 'react';
import { ISearchTitle } from '../interfaces/ISearchTitle';
import { useFetchProductListQuery } from '../../../redux/services/webSearch';
import { useCurrentLocale } from '../../../locales/client';

const SearchTitle: FC<ISearchTitle> = ({ searchStr, searchTitle }) => {
    const lang = useCurrentLocale();
    const { data, isFetching, error } = useFetchProductListQuery({ lang, searchStr });

    if (isFetching) {
        return null;
    }

    if (error) {
        return <h3>Error!</h3>;
    }

    return (
        <>
            {searchTitle}

            <div>
                &emsp;&quot;{searchStr}&quot;&emsp;{`(${data?.length})`}
            </div>
        </>
    );
};

export default SearchTitle;
