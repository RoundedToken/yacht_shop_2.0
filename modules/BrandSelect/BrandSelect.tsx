'use client';

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IBrandSelect } from './interfaces/IBrandSelect';
import styles from './BrandSelect.module.scss';
import BrandSelectHeader from './components/BrandSelectHeader';
import { getBrandsDisplay } from '../../redux/stylesSlice/selectors';
import { getSelectedBrandsFromLocation, getSortedBrands } from '../../redux/sideBarSlice/selectors';
import { useLocation } from '../../hooks/useLocation';
import BrandSelectItem from './components/BrandSelectItem';
import { useParam } from '../../hooks/useParam';
import { getNumeric } from '../../utils/getNumeric';

const BrandSelect: FC<IBrandSelect> = ({ title }) => {
    const location = useLocation();
    const id = getNumeric(useParam());
    const selectedBrands = useSelector(getSelectedBrandsFromLocation(location));
    const brandsDisplay = useSelector(getBrandsDisplay(location));
    const sortedBrands = useSelector(getSortedBrands({ location, id }));

    return (
        <div
            style={brandsDisplay === 'none' ? {} : { width: '100%' }}
            className={`${styles.brandsContainer} brandsContainer`}
        >
            <>
                <BrandSelectHeader title={title} />

                {sortedBrands.map((brand) => (
                    <BrandSelectItem key={brand} styles={styles} brand={brand} selectedBrands={selectedBrands} />
                ))}
            </>
        </div>
    );
};

export default BrandSelect;
