'use client';

import React, { FC } from 'react';
import { ISearchTitle } from '../interfaces/ISearchTitle';
import { useFetchProductListQuery } from '../../../redux/services/webSearch';
import { useCurrentLocale } from '../../../locales/client';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchTitle: FC<ISearchTitle> = ({ searchStr, searchTitle }) => {
    const lang = useCurrentLocale();
    const { data, isFetching, error } = useFetchProductListQuery({ lang, searchStr });

    if (isFetching) {
        return (
            <SkeletonTheme baseColor="rgb(38, 162, 187)" highlightColor="rgb(39, 172, 198)">
                <Skeleton containerClassName="skeleton" width={200} height={32} />
            </SkeletonTheme>
        );
    }

    if (error) {
        return null;
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
