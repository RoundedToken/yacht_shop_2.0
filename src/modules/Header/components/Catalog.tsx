'use client';

import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import NavBarItem from './NavBarItem';
import catalogImg from '../../../../public/assets/images/catalog.svg';
import arrowImg from '../../../../public/assets/images/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { ICatalog } from '../interfaces/ICatalog';
import Image from 'next/image';
import { setModalType } from '../../../redux/modalSlice/modalSlice';
import { switchModalDisplay } from '../../../redux/stylesSlice/stylesSlice';
import { getIsDropdownDisplay } from '../../../redux/stylesSlice/selectors';
import { isClient } from '../../../utils/isClient';
import { useTranslations } from 'next-intl';

const Catalog: FC<ICatalog> = ({ styles }) => {
    const isDropdownDisplay = useSelector(getIsDropdownDisplay);
    const dispatch = useDispatch();
    const isTouchDevice = isClient && 'ontouchstart' in document.documentElement;
    const t = useTranslations('Index');

    const switchOnClick = () => {
        dispatch(setModalType('nav'));
        dispatch(switchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <NavBarItem
            styles={styles}
            route={routeConstants.CATEGORIES_ROUTE + '/0'}
            src={catalogImg}
            className={`${styles.navBar__item} ${styles.catalog}`}
            switcher={
                <>
                    <label style={isTouchDevice ? { display: 'none' } : {}} className={styles.dropdownSwitcher}>
                        <input
                            id="switcher"
                            type="checkbox"
                            checked={isDropdownDisplay}
                            onChange={() => switchOnClick()}
                        />

                        <Image id="switcher" src={arrowImg} alt="" />
                    </label>
                </>
            }
        >
            <div id="catalog">{t('catalog')}</div>
        </NavBarItem>
    );
};

export default Catalog;
