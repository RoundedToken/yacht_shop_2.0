import React, { FC } from 'react';
import { routeConstants } from '../../../models/enums/EConstants';
import NavBarItem from './NavBarItem';
import catalogImg from '../../../public/assets/images/catalog.svg';
import arrowImg from '../../../public/assets/images/arrow.png';
import { ICatalog } from '../interfaces/ICatalog';
import Image from 'next/image';
import { isClient } from '../../../utils/isClient';
import DropdownSwitch from './DropdownSwitch';

const Catalog: FC<ICatalog> = ({ styles, location, t }) => {
    const isTouchDevice = isClient && 'ontouchstart' in document.documentElement;

    return (
        <NavBarItem
            styles={styles}
            route={routeConstants.CATEGORIES_ROUTE + '/0'}
            src={catalogImg}
            className={`${styles.navBar__item} ${styles.catalog}`}
            location={location}
            switcher={
                <>
                    {!isTouchDevice && (
                        <label style={isTouchDevice ? { display: 'none' } : {}} className={styles.dropdownSwitcher}>
                            <DropdownSwitch />

                            <Image id="switcher" src={arrowImg} alt="" />
                        </label>
                    )}
                </>
            }
        >
            <div id="catalog">{t('catalog')}</div>
        </NavBarItem>
    );
};

export default Catalog;
