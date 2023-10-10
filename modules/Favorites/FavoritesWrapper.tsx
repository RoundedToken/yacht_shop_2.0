'use client';

import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesIdList, getFavoritesUpdate } from '../../redux/favoritesSlice/selectors';
import { I18nProviderClient, useCurrentLocale } from '../../locales/client';
import { useLazyFetchCartProductListQuery } from '../../redux/services/webCartProductList';
import { getFavoritesBrands } from '../../redux/sideBarSlice/selectors';
import { toFalseTheUpdate } from '../../redux/favoritesSlice/favoritesSlice';
import styles from './FavoritesList.module.scss';
import FavoritesList from './components/FavoritesList';

const FavoritesWrapper = ({
    emptyComponent,
    loadingComponent,
}: {
    emptyComponent: ReactNode;
    loadingComponent: ReactNode;
}) => {
    const favoritesIdList = useSelector(getFavoritesIdList);
    const lang = useCurrentLocale();
    const favoritesUpdate = useSelector(getFavoritesUpdate);
    const brands = useSelector(getFavoritesBrands);
    const [update, { data, isFetching, error }] = useLazyFetchCartProductListQuery();
    const [isFirst, setIsFirst] = useState(true);
    const dispatch = useDispatch();
    const isEmpty = favoritesIdList.length === 0;

    useEffect(() => {
        if (isFirst && !isEmpty) {
            update({ idList: favoritesIdList, lang });
            setIsFirst(false);
        }
    }, [favoritesIdList, isFirst, lang, update, isEmpty]);

    //Lang
    useEffect(() => {
        if (!isEmpty) {
            update({ idList: favoritesIdList, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    //favoritesUpdate
    useEffect(() => {
        if (favoritesUpdate && !isEmpty) {
            update({ idList: favoritesIdList, lang });
            dispatch(toFalseTheUpdate());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favoritesUpdate]);

    if (isFetching) {
        return (
            <div className={styles.favoritesContainer}>
                <div className={styles.favoritesList}>
                    {favoritesIdList?.map((id) => <Fragment key={id}>{loadingComponent}</Fragment>)}
                </div>
            </div>
        );
    }

    if (!data && (!isFirst || isEmpty)) {
        return (
            <div className={styles.favoritesContainer}>
                <I18nProviderClient>{emptyComponent}</I18nProviderClient>
            </div>
        );
    }

    return (
        <div className={styles.favoritesContainer}>
            <I18nProviderClient>
                {error && <h1>Error!</h1>}

                {data && <FavoritesList styles={styles} brands={brands} data={data} />}
            </I18nProviderClient>
        </div>
    );
};

export default FavoritesWrapper;
