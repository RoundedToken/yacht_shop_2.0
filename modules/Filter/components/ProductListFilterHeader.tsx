import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProductListFilterHeader } from '../interfaces/IProductListFilterHeader';
import arrowImg from '../../../public/assets/images/arrow.png';
import { getFilterDisplay } from '../../../redux/stylesSlice/selectors';
import { getProductListFilters } from '../../../redux/sideBarSlice/selectors';
import { switchFilterDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { clearProductListFilters } from '../../../redux/sideBarSlice/sideBarSlice';
import { useI18n } from '../../../locales/client';
import Image from 'next/image';

const ProductListFilterHeader: FC<IProductListFilterHeader> = ({ styles }) => {
    const t = useI18n();
    const dispatch = useDispatch();
    const filterDisplay = useSelector(getFilterDisplay);
    const isFilters = Object.values(useSelector(getProductListFilters)).some((val) => val);
    const clearRef = useRef<HTMLDivElement>(null);

    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchFilterDisplay());
        }
    };
    const clearOnClick = () => {
        dispatch(clearProductListFilters());
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

export default ProductListFilterHeader;
