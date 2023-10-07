import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TCartListFilter } from '../../../models/types/TCartListFilter';
import { ICartListFilterItem } from '../interfaces/ICartListFilterItem';
import { getFilterDisplay } from '../../../redux/stylesSlice/selectors';
import { getIsCartFilterChecked } from '../../../redux/sideBarSlice/selectors';
import { setCartListFilter } from '../../../redux/sideBarSlice/sideBarSlice';

const CartListFilterItem: FC<ICartListFilterItem> = ({ styles, value, name }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const filterDisplay = useSelector(getFilterDisplay);
    const isChecked = useSelector(getIsCartFilterChecked(value));
    const dispatch = useDispatch();

    const filterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            setCartListFilter({
                filter: e.target.value as TCartListFilter,
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

export default CartListFilterItem;
