import React, { FC } from 'react';
import { sortByBrands } from '../helpers/sortByBrands';
import { ICategoryBrandSelect } from '../interfaces/ICategoryBrandSelect';
import BrandSelectItem from './BrandSelectItem';
import { useFetchAllIdQuery } from '../../../redux/services/navTree';
import { useCurrentLocale } from '../../../locales/client';

const CategoryBrandSelect: FC<ICategoryBrandSelect> = ({ styles, categoryId, selectedBrands, brandOnChange }) => {
    const lang = useCurrentLocale();
    const { data } = useFetchAllIdQuery(lang);
    const categoryBrands = data?.flatTree[`${categoryId}`].brands.slice();
    const brands = sortByBrands(categoryBrands, selectedBrands);

    return (
        <>
            {brands?.map((brand) => (
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

export default CategoryBrandSelect;
