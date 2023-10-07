import React, { FC, useEffect } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import { sortByBrands } from '../helpers/sortByBrands';
import { ISearchBrandSelect } from '../interfaces/ISearchBrandSelect';
import BrandSelectItem from './BrandSelectItem';
import { useLazyFetchProductListQuery } from '../../../redux/services/webSearch';

const SearchBrandSelect: FC<ISearchBrandSelect> = ({
    styles,
    selectedBrands,
    brandOnChange,
    lang,
    locationParams,
    locationPath,
}) => {
    const [updateWebSearch, { data: searchProductList, isFetching, error }] = useLazyFetchProductListQuery();

    useEffect(() => {
        if (locationPath === routeConstants.SEARCH_ROUTE) {
            updateWebSearch({ searchStr: decodeURI(locationParams), lang });
        }
    }, [locationPath, locationParams, lang, updateWebSearch]);

    return (
        <>
            {error && <h1>Error!</h1>}
            {!isFetching &&
                sortByBrands(
                    Array.from(new Set(searchProductList?.map((product) => product.brand) || [])),
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

export default SearchBrandSelect;
