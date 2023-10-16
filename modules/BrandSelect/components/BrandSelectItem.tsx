import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IBrandSelectItem } from '../interfaces/IBrandSelectItem';
import { getBrandsDisplay } from '../../../redux/stylesSlice/selectors';
import { useLocation } from '../../../hooks/useLocation';
import { addBrand, removeBrand } from '../../../redux/sideBarSlice/sideBarSlice';

const BrandSelectItem: FC<IBrandSelectItem> = ({ styles, selectedBrands, brand }) => {
    const location = useLocation();
    const labelRef = useRef<HTMLLabelElement>(null);
    const brandsDisplay = useSelector(getBrandsDisplay(location));
    const dispatch = useDispatch();

    const brandOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;

        dispatch(isChecked ? addBrand({ brand, location }) : removeBrand({ brand, location }));
    };

    if (brandsDisplay === 'none') {
        return null;
    }

    return (
        <label ref={labelRef} className={styles.container}>
            <input checked={selectedBrands.includes(brand)} value={brand} type="checkbox" onChange={brandOnChange} />

            {brand}

            <span className={styles.checkMark} />
        </label>
    );
};

export default BrandSelectItem;
