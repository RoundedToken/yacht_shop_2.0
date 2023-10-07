import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TProductListFilter } from '../../../models/types/TProductListFilter';
import { IProductListFilterItem } from '../interfaces/IProductListFilterItem';
import { getFilterDisplay } from '../../../redux/stylesSlice/selectors';
import { getIsProductListFilterChecked } from '../../../redux/sideBarSlice/selectors';
import { setProductListFilter } from '../../../redux/sideBarSlice/sideBarSlice';

const ProductListFilterItem: FC<IProductListFilterItem> = ({ styles, name, value }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const filterDisplay = useSelector(getFilterDisplay);
    const isChecked = useSelector(getIsProductListFilterChecked(value));
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setProductListFilter({
                filter: e.target.value as TProductListFilter,
                status: e.target.checked,
            }),
        );
    };

    useEffect(() => {
        if (labelRef.current) {
            labelRef.current.style.display = filterDisplay;
        }
    }, [filterDisplay]);

    return (
        <label ref={labelRef} className={styles.container}>
            <input checked={isChecked} value={value} type="checkbox" onChange={(e) => filterOnChange(e)} />

            {name}

            <span className={styles.checkMark}></span>
        </label>
    );
};

export default ProductListFilterItem;
