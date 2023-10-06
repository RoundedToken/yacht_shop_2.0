'use client';

import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import filtersImg from '../../../public/assets/images/filters.png';

const MobileToggle = ({ styles }: { styles: { readonly [key: string]: string } }) => {
    const dispatch = useDispatch();

    const filterOnClick = () => {
        // dispatch(setMobileModalType('filter'));
        // dispatch(switchMobileModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <div className={styles.filterButton} onClick={filterOnClick}></div>

            <Image
                className={styles.filterImg}
                src={filtersImg}
                alt=""
                onClick={filterOnClick}
                width={50}
                height={50}
            />
        </>
    );
};

export default MobileToggle;
