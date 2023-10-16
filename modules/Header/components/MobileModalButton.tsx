'use client';

import Image from 'next/image';
import React from 'react';
import lifebuoyImg from '../../../public/assets/images/lifebuoy.svg';
import translationImg from '../../../public/assets/images/translation.png';
import styles from '../Header.module.scss';
import { useDispatch } from 'react-redux';
import { setMobileModalType } from '../../../redux/modalSlice/modalSlice';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice/stylesSlice';

const MobileModalButton = () => {
    const dispatch = useDispatch();

    const langOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('lang'));
        dispatch(switchMobileModalDisplay());
    };
    const searchOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('search'));
        dispatch(switchMobileModalDisplay());
    };

    return (
        <>
            <Image
                height={50}
                width={50}
                className={styles._mobileSearch}
                src={lifebuoyImg}
                alt=""
                onClick={searchOnClick}
            />

            <Image
                height={50}
                width={50}
                className={styles._mobileLang}
                src={translationImg}
                alt=""
                onClick={langOnClick}
            />
        </>
    );
};

export default MobileModalButton;
