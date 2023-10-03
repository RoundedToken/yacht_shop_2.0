import React, { FC } from 'react';
import NavBarItem from './NavBarItem';
import ropeImg from '../../../public/assets/images/rope.png';
import starImg from '../../../public/assets/images/starFilled.svg';
import { routeConstants } from '../../../models/enums/EConstants';
import Cart from './Cart';
import Catalog from './Catalog';
import { INavBar } from '../interfaces/INavBar';
import { useI18n } from '../../../locales/client';

const NavBar: FC<INavBar> = ({ styles }) => {
    const t = useI18n();
    return (
        <div className={styles.navBar}>
            <Catalog styles={styles} />

            <NavBarItem
                styles={styles}
                route={routeConstants.CRIMPING_ROUTE}
                src={ropeImg}
                className={`${styles.navBar__item} ${styles.crimping}`}
            >
                {t('rope_crimping')}
            </NavBarItem>

            <NavBarItem
                styles={styles}
                route={routeConstants.FAVORITES_ROUTE}
                src={starImg}
                className={`${styles.navBar__item} ${styles.favorites}`}
            >
                {t('favorites')}
            </NavBarItem>

            <Cart styles={styles} />
        </div>
    );
};

export default NavBar;
