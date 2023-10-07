import React, { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IBrandSelectItem } from '../interfaces/IBrandSelectItem';
import { getBrandsDisplay } from '../../../redux/stylesSlice/selectors';

const BrandSelectItem: FC<IBrandSelectItem> = ({ styles, selectedBrands, brandOnChange, brand }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const brandsDisplay = useSelector(getBrandsDisplay);

    if (brandsDisplay === 'none') {
        return null;
    }

    return (
        <label ref={labelRef} className={styles.container}>
            <input
                checked={selectedBrands.includes(brand)}
                value={brand}
                type="checkbox"
                onChange={(e) => brandOnChange(e)}
            />

            {brand}

            <span className={styles.checkMark}></span>
        </label>
    );
};

export default BrandSelectItem;
