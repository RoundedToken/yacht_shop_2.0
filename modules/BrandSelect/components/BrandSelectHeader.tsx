import React, { FC, useRef } from 'react';
import { IBrandSelectHeader } from '../interfaces/IBrandSelectHeader';
import { useDispatch, useSelector } from 'react-redux';
import arrowImg from '../../../public/assets/images/arrow.png';
import { clearBrands } from '../../../redux/sideBarSlice/sideBarSlice';
import { switchBrandsDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { getBrandsDisplay } from '../../../redux/stylesSlice/selectors';
import { useI18n } from '../../../locales/client';
import Image from 'next/image';

const BrandSelectHeader: FC<IBrandSelectHeader> = ({ styles, selectedBrands }) => {
    const dispatch = useDispatch();
    const brandsDisplay = useSelector(getBrandsDisplay);
    const clearRef = useRef<HTMLDivElement>(null);
    const t = useI18n();

    const clearOnClick = () => {
        dispatch(clearBrands());
    };
    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchBrandsDisplay());
        }
    };

    return (
        <div className={styles.header} onClick={(e) => switchDisplay(e)}>
            <div
                ref={clearRef}
                onClick={clearOnClick}
                className={styles.closeContainer}
                style={selectedBrands.length === 0 ? { display: 'none' } : {}}
            >
                &times;
            </div>

            {t('brands')}

            <Image
                className={brandsDisplay === 'none' ? styles.rightArrow : styles.downArrow}
                src={arrowImg}
                alt=""
                width={30}
                height={30}
            />
        </div>
    );
};

export default BrandSelectHeader;
