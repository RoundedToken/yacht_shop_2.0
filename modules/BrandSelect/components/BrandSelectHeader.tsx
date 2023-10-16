import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrowImg from '../../../public/assets/images/arrow.png';
import { clearBrands } from '../../../redux/sideBarSlice/sideBarSlice';
import { switchBrandsDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { getBrandsDisplay } from '../../../redux/stylesSlice/selectors';
import Image from 'next/image';
import { getSelectedBrandsFromLocation } from '../../../redux/sideBarSlice/selectors';
import styles from '../BrandSelect.module.scss';
import { useLocation } from '../../../hooks/useLocation';

const BrandSelectHeader = ({ title }: { title: string }) => {
    const location = useLocation();
    const selectedBrands = useSelector(getSelectedBrandsFromLocation(location));
    const dispatch = useDispatch();
    const brandsDisplay = useSelector(getBrandsDisplay(location));
    const clearRef = useRef<HTMLDivElement>(null);

    const switchDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target !== clearRef.current) {
            dispatch(switchBrandsDisplay(location));
        }
    };

    return (
        <div className={styles.header} onClick={(e) => switchDisplay(e)}>
            <div
                ref={clearRef}
                onClick={() => dispatch(clearBrands(location))}
                className={styles.closeContainer}
                style={selectedBrands.length === 0 ? { display: 'none' } : {}}
            >
                &times;
            </div>

            {title}

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
