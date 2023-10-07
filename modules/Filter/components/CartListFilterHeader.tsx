import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICartListFilterHeader } from '../interfaces/ICartListFilterHeader';
import arrowImg from '../../../public/assets/images/arrow.png';
import { getFilterDisplay } from '../../../redux/stylesSlice/selectors';
import { getCartListFilters } from '../../../redux/sideBarSlice/selectors';
import { switchFilterDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { clearCartListFilters } from '../../../redux/sideBarSlice/sideBarSlice';
import { useI18n } from '../../../locales/client';
import Image from 'next/image';

const CartListFilterHeader: FC<ICartListFilterHeader> = ({ styles }) => {
    const t = useI18n();
    const dispatch = useDispatch();
    const filterDisplay = useSelector(getFilterDisplay);
    const isFilters = Object.values(useSelector(getCartListFilters)).some((val) => val);
    const clearRef = useRef<HTMLDivElement>(null);

    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchFilterDisplay());
        }
    };
    const clearOnClick = () => {
        dispatch(clearCartListFilters());
    };

    return (
        <div className={styles.filterHeader} onClick={(e) => switchDisplay(e)}>
            <div
                ref={clearRef}
                onClick={clearOnClick}
                className={styles.closeContainer}
                style={!isFilters ? { display: 'none' } : {}}
            >
                &times;
            </div>

            {t('filter')}

            <Image
                className={filterDisplay === 'none' ? styles.rightArrow : styles.downArrow}
                src={arrowImg}
                alt=""
                width={30}
                height={30}
            />
        </div>
    );
};

export default CartListFilterHeader;
