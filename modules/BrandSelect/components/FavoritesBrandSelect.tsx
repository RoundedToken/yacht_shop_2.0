import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { routeConstants } from '../../../models/enums/EConstants';
import { sortByBrands } from '../helpers/sortByBrands';
import { IFavoritesBrandSelect } from '../interfaces/IFavoritesBrandsSelect';
import BrandSelectItem from './BrandSelectItem';
import { getFavoritesIdList, getFavoritesUpdate } from '../../../redux/favoritesSlice/selectors';
import { useLazyFetchCartProductListQuery } from '../../../redux/services/webCartProductList';

const FavoritesBrandSelect: FC<IFavoritesBrandSelect> = ({
    styles,
    selectedBrands,
    brandOnChange,
    lang,
    locationPath,
}) => {
    const favoritesUpdate = useSelector(getFavoritesUpdate);
    const favoritesIdList = useSelector(getFavoritesIdList);
    const [updateFavorites, { data: favoritesList, isFetching, error }] = useLazyFetchCartProductListQuery();

    useEffect(() => {
        if (locationPath === routeConstants.FAVORITES_ROUTE && favoritesIdList.length > 0) {
            updateFavorites({ idList: favoritesIdList, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationPath, favoritesUpdate, lang, updateFavorites]);
    return (
        <>
            {error && <h1>Error!</h1>}
            {!isFetching &&
                sortByBrands(
                    Array.from(new Set(favoritesList?.map((product) => product.brand) || [])),
                    selectedBrands,
                )?.map((brand) => (
                    <BrandSelectItem
                        key={brand}
                        styles={styles}
                        brand={brand}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                    />
                ))}
        </>
    );
};

export default FavoritesBrandSelect;
