import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICartSortingItem } from '../interfaces/ICartSortingItem';
import { getSortingDisplay } from '../../../redux/stylesSlice/selectors';
import { getCartSorting } from '../../../redux/sideBarSlice/selectors';
import { setCartSorting } from '../../../redux/sideBarSlice/sideBarSlice';

const CartSortingItem: FC<ICartSortingItem> = ({ styles, name, value }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const sortDisplay = useSelector(getSortingDisplay);
    const cartSorting = useSelector(getCartSorting);
    const isCheckedASC = cartSorting.sortKey === value && cartSorting.sortType === 'ASC';
    const isCheckedDESC = cartSorting.sortKey === value && cartSorting.sortType === 'DESC';
    const dispatch = useDispatch();

    const filterASCOnChange = () => {
        if (!isCheckedASC && !isCheckedDESC) {
            dispatch(
                setCartSorting({
                    sortKey: value,
                    sortType: 'ASC',
                }),
            );
        }
    };
    const filterDESCOnChange = () => {
        if (!isCheckedASC && !isCheckedDESC) {
            dispatch(
                setCartSorting({
                    sortKey: value,
                    sortType: 'DESC',
                }),
            );
        }
    };
    const filterASCOnClick = () => {
        if (isCheckedASC) {
            dispatch(
                setCartSorting({
                    sortKey: value,
                    sortType: 'DESC',
                }),
            );
        }
    };
    const filterDESCOnClick = () => {
        if (isCheckedDESC) {
            dispatch(
                setCartSorting({
                    sortKey: value,
                    sortType: 'ASC',
                }),
            );
        }
    };

    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.display = sortDisplay;
        }
    }, [sortDisplay]);

    return (
        <div ref={divRef} className={styles.group}>
            <label
                className={styles.container}
                style={isCheckedASC ? {} : isCheckedDESC ? { display: 'none' } : {}}
                onClick={filterASCOnClick}
            >
                <input checked={isCheckedASC} value={value} type="radio" onChange={filterASCOnChange} />

                <span className={styles.checkMark}>{'\u{02191}'}</span>
            </label>

            <label
                className={styles.container}
                style={isCheckedDESC ? {} : { display: 'none' }}
                onClick={filterDESCOnClick}
            >
                <input checked={isCheckedDESC} value={value} type="radio" onChange={filterDESCOnChange} />

                <span className={styles.checkMark}>{'\u{02193}'}</span>
            </label>
            {name}
        </div>
    );
};

export default CartSortingItem;
